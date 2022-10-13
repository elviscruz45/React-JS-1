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























function useLocalStorage(itemName,initialValue){

  const localStorageItem=localStorage.getItem(itemName)
  let parsedItem;
  if(!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue))
    parsedItem=initialValue

  }else{
    parsedItem=JSON.parse(localStorageItem)
  }
  const [item,setItem]=React.useState(parsedItem)

  const saveItem=(newItem)=>{
    const stringifiedItem=JSON.stringify(newItem)
    localStorage.setItem(itemName,stringifiedItem)
    setItem(newItem)
  }

  return [
    item,
    saveItem,
  ]

}




function App() {
  const [todos,saveTodos]=useLocalStorage("TODOS_V1",[])

  //Todo counter
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