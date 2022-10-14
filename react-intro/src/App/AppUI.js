import React from "react"
import {TodoContext} from "../TodoContext/index.js"
import {TodoCounter} from "../TodoCounter"
import {TodoSearch} from "../TodoSearch/index.js"
import {TodoList} from "../TodoList/index.js"
import {TodoItem} from "../TodoItem/index.js"
import {CreateTodoButton} from "../CreateTodoButton/index.js"

import {Modal} from "../Modal/index.js"

function AppUI(){
    const {
        error,
        loading, 
        searchedTodos,
        completeTodos,
        deleteTodo,
        openModal,
        setOpenModal,
    }=React.useContext(TodoContext)
    return (
        <React.Fragment>
          <TodoCounter/>
    
          <TodoSearch/>
    
            <TodoList>
            {error && <p>Desesperate, Hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading &&!searchedTodos.length)&&<p> Crea tu primer Todo</p>}
            
            
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
        
            {!!openModal && (
            <Modal>
                <p> {searchedTodos[0]?.text}</p>
            </Modal>
            )}
            
          <CreateTodoButton
            setOpenModal={setOpenModal}
          />
        </React.Fragment>
        
        );

}

export {AppUI}


