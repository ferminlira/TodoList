
import {} from './index';

export class Todo {

    static fromJson ({ id, tarea, completado, creado}) {
        // de esta forma podemos no solo importar las tareas del LocalStorage
        // trayendo los objetos desde el JSON, sino que tambien podemos
        // insertarlos en nuestra instancia de la clase Todo para poder aplicarle los metodos
        const tempTodo = new Todo( tarea );
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }

    constructor( tarea ) {
        this.tarea = tarea;
        this.id = new Date().getTime(); //generamos el ID para la tarea

        this.completado = false;
        this.creado = new Date();
    }
}