import React from "react"

import {TodoCounter} from "../TodoCounter"
import {TodoSearch} from "../TodoSearch/index.js"
import {TodoList} from "../TodoList/index.js"
import {TodoItem} from "../TodoItem/index.js"
import {CreateTodoButton} from "../CreateTodoButton/index.js"

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodos,
    deleteTodo,
}){
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
        </React.Fragment>);

}



export {AppUI}