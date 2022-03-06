// Esta clase va a servir para manipular los items en el listado de tareas
// los cuales se van a crear, eliminar, marcar com ocompletados, etc.

import { Todo } from './todo.class';

export class TodoList {
    constructor() {
        //this.todos = [];
        this.cargarLocalStorage();
    }

    // a continuacion van los metodos de esta clase
    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo( id ) {

        // aca utilizamos el metodo filter de javascript para recrear el listado sin el
        // item en cuestion (sin el que eliminamos)
        this.todos = this.todos.filter( todo => todo.id != id ); 
        // dentro del parentesis se chequea que el id sea diferente al id del item listado en cuestion.
        this.guardarLocalStorage();
    }

    marcarCompletado( id ) {

        for ( const todo of this.todos ) {
            if (todo.id == id ) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }

    eliminarCompletados() {
        //aca usamos el filter para no incluir en el nuevo
        //array todos los que no esten completados 
        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify( this.todos ) );
    }

    cargarLocalStorage(){

        this.todos = ( localStorage.getItem('todo') )
                        ? JSON.parse( localStorage.getItem('todo') )
                        : [];
            this.todos = this.todos.map( Todo.fromJson );
            // el map me permite barrer c/u de los elementos dentro de un arreglo
            // y retornas cada uno con sus objetos mutados
        }
}