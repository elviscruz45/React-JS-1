import React from "react"
import {TodoCounter} from "../TodoCounter"
import {TodoSearch} from "../TodoSearch.js"
import {TodoList} from "../TodoList.js"
import {TodoItem} from "../TodoItem.js"
import {CreateTodoButton} from "../CreateTodoButton.js"

//import logo from './logo.svg';
// import './App.css';

const defaultTodos=[
  {text:"Cortar Cebolla",completed:true},
  {text:"Tomar el curso de intro a React",completed:false},
  {text:"Llorar con la llorona",completed:false},
  {text:"LALALALALA",completed:false},
]

function App() {

  //Todo counter
  const [todos,setTodos]=React.useState(defaultTodos)
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
    setTodos(newTodos)
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
    setTodos(newTodos)
  }
  return (

    <React.Fragment>
      <TodoCounter
      total={totalTodos}
      completed={completedTodos}/>

      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
      {searchedTodos.map(todo => (
            <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>completeTodos(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}
            />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;