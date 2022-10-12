import React from "react"
import {AppUI} from "./AppUI.js"

//import logo from './logo.svg';
// import './App.css';

const defaultTodos=[
  {text:"Cortar Cebolla",completed:true},
  {text:"Tomar el curso de intro a React",completed:false},
  {text:"Llorar con la llorona",completed:false},
  {text:"LALALALALA",completed:false},
]

function App() {
  const localStorageTodos=localStorage.getItem("TODOS_V1")
  let parsedTodos;
  if(!localStorageTodos){
    localStorage.setItem("TODOS_V1",JSON.stringify([]))
    parsedTodos=[]

  }else{
    parsedTodos=JSON.parse(localStorageTodos)
  }



  //Todo counter
  const [todos,setTodos]=React.useState(parsedTodos)
  const totalTodos=todos.length
  const completedTodos=todos.filter(todo=>!!todo.completed).length

  //Todo Search
  const [searchValue,setSearchValue]=React.useState("")
  let searchedTodos=[];

  if(!searchValue.length>=1){
    searchedTodos=todos;
  }else{
    searchedTodos=todos.filter(todo=>{
      const todoText=todo.text.toLowerCase()
      const searchText=searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }
  const saveTodos=(newTodos)=>{
    const stringifiedTodos=JSON.stringify(newTodos)
    localStorage.setItem("TODOS_V1",stringifiedTodos)
    setTodos(newTodos)

  }

  const completeTodos=(text)=>{
    const todoIndex=todos.findIndex(todo=>todo.text===text)
    const newTodos=[...todos]
    newTodos[todoIndex].completed=true;
    saveTodos(newTodos)
    // todos[todoIndex]={
    //   text:todos[todoIndex].text,
    //   completed:true,
    // }
  }
  const deleteTodo=(text)=>{
    const todoIndex=todos.findIndex(todo=>todo.text===text)
    const newTodos=[...todos]
    newTodos.splice(todoIndex,1)
    //newTodos[todoIndex].completed=false;
    saveTodos(newTodos)
  }
  return (
    <AppUI
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodos={completeTodos}
    deleteTodo={deleteTodo}
    />
  );
}

export {App};