import React from "react"
import {TodoCounter} from "./TodoCounter"
import {TodoSearch} from "./TodoSearch.js"
import {TodoList} from "./TodoList.js"
import {TodoItem} from "./TodoItem.js"
import {CreateTodoButtom} from "./CreateTodoButton.js"


//import logo from './logo.svg';
// import './App.css';


const todos=[
  {text:"Cortar Cebolla",completed:false},
  {text:"Tomar el curso de intro a React",completed:true},
  {text:"Llorar con la llorona",completed:false},
]

function App() {
  return (

    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
      {todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButtom/>
    </React.Fragment>
  );
}

export default App;