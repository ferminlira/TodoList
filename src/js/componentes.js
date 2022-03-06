
import { Todo } from '../classes';

import { todoList } from '../index';


// Referencias al HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');


// en base al todo que se recibe, se crea todo el componente HTML
export const crearTodoHtml = ( todo ) => {

    //la 2da linea a continuacion evalua si el todo esta completado, y si lo esta le agreg ala clase completado
    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
						<div class="view">
							<input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' } >
							<label>${ todo.tarea }</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );

    return div;

}



// Eventos
txtInput.addEventListener('keyup', ( event ) => {  //el event aca nos dice que tecla presiono el usuario
    
        if ( event.keyCode === 13 ) {
            console.log(event);

            console.log(txtInput.value);
            // para crear una nueva instancia del Todo ya importe la clase al prinicpio del archivo
            const nuevoTodo = new Todo( txtInput.value );
            todoList.nuevoTodo( nuevoTodo );

            crearTodoHtml( nuevoTodo );
            txtInput.value = '';
        }
        
});

// marcar como completado
divTodoList.addEventListener('click', ( event ) => {
    const nombreElemento = event.target.localName; // input, label, button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    

    if ( nombreElemento.includes('input') ){ // si el click es en el check
        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle('completed');

    } else if ( nombreElemento.includes('button') ){ // si el click es en el boton de eliminar
        console.log(nombreElemento);
        todoList.eliminarTodo( todoId );
        divTodoList.removeChild(todoElemento);
    }
});




// Eliminar completados
btnBorrar.addEventListener('click', () => {

    todoList.eliminarCompletados();

    // aca hacemos un FOR INVERSO, que empieza a eliminar items del listado 
    // por el finally, y no por el item que esta en 1ra posicion
    // Eso se hace para que al pasar por cada item e ir eliminando los completados
    // los numeros de indice no cambien.
    for( let i = divTodoList.children.length-1; i >= 0; i-- ) {
    //se resta 1 porque todos los elementos comienzan con la posicion 0 como indice

        const elemento = divTodoList.children[i];

        if( elemento.classList.contains('completed') ){
            divTodoList.removeChild(elemento);
        }

    }
    
    

});



// Filtros
ulFiltros.addEventListener('click', (event) => {

    const filtro = event.target.text;
    if( !filtro){ return} //en este if consultamso si existe el filtro

    //aca aplicamos estilo de reborde sobre el filtro aplicado
    anchorFiltros.forEach( elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');


    //agregamos clase hidden en los elementos en cuestion
    for (const elemento of divTodoList.children) {
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch( filtro ) {

            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
            break;
            
        }
    }
});