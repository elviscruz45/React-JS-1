import React from "react"
import {AppUI} from "./AppUI.js"
import {TodoProvider} from "../TodoContext"

//import logo from './logo.svg';
// import './App.css';

// const defaultTodos=[
//   {text:"Cortar Cebolla",completed:true},
//   {text:"Tomar el curso de intro a React",completed:false},
//   {text:"Llorar con la llorona",completed:false},
//   {text:"LALALALALA",completed:false},
// ]


//---------------------------------------------------------------------------------------

function App() {
  
  return (
   <TodoProvider>
    <AppUI/>
   </TodoProvider>
  );
}

export {App};