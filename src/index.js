
// importar el modulo
// el nombre de archivo desde donde importa no necesita 
// tener la extension del archivo porque siempre va a buscar un .js
import { saludar } from './js/componentes.js'; 
import './styles.css';


import { Todo, TodoList } from './classes'; 
//asi se importan varias clases de un solo archivo 
//en vez de importar de varios archivos como en el codigo comentado aca abajo

// import { Todo } from './classes/todo.class.js'; 
// import { TodoList } from './classes/todo-list.class.js'; 

import { crearTodoHtml } from './js/componentes.js'; 

export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml );

console.log( 'todos', todoList.todos );

// tarea.completado = true;


// const newTodo = new Todo('aprender piano');
// TodoList.nuevoTodo( newTodo );




//solo se puede grabar un string
//localStorage.setItem('mi-key', 'ABC123');

//Elimina el Key que creamos
// setTimeout( ()=> {
//     localStorage.removeItem('mi-key');
// }, 1500 );