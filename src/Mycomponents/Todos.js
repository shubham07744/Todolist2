import React from 'react'
import TodoItems from '../Mycomponents/TodoItems'

const Todos = (props) => {
  let mystyle={
    minHeight:"100vh",
  
  }
  return (
    <div className='container' style={mystyle}>
      <h4 className='my-1'>Todo List</h4>
      {props.todos.length===0? "No todos to display":
      props.todos.map((todo)=>{
        return <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
       
      })}
     
    </div>
  )
}

export default Todos
