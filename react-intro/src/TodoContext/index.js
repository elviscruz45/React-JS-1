import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext=React.createContext();

function TodoProvider(props){
//
const {
    item:todos,
    saveItem:saveTodos,
    loading,
    error,
  }=useLocalStorage("TODOS_V1",[])

  // modal
  const[openModal,setOpenModal]=React.useState(false)

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



  const addTodos=(text)=>{
    const newTodos=[...todos]
    newTodos.push({
      completed:false,
      text,
    })
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

  // Assessing React.useEffect
  // console.log("Render(antes de luseeffect)")
  // React.useEffect(()=>{
  //   console.log("use effect")
  // },[totalTodos])
  // console.log("Render(luego de luseeffect)")
    return(
        <TodoContext.Provider value={
            {
                loading,
                error,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                addTodos,
                completeTodos,
                deleteTodo,
                openModal,
                setOpenModal,
            }
        }>
            {props.children}
        </TodoContext.Provider>
    )
}



export {TodoContext,TodoProvider}