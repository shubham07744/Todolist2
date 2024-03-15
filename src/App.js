import React,{useState,useEffect} from 'react'
import Headers from "./Mycomponents/Header";
import Footer from './Mycomponents/Footer';
import Todos from './Mycomponents/Todos';
import AddTodo from './Mycomponents/AddTodo';

export default function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    console.log("I am onDelete",todo)
    setTodos(todos.filter((t)=>{
      return t!==todo
    }))
  }
  const addTodo=(title,desc)=>{
    console.log("adding todo",title,desc);
    let sno=0
    let series=(sno)=>{
      return sno+1
    }
    const myTodo={
      sno:series(sno),
      title:title,
      desc:desc
    }
    console.log(myTodo)
    setTodos([...todos,myTodo])
  }
  const [todos,setTodos]=useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos]);

 
  return (
    <div>
      <Headers title='My TodoList'/>
      <AddTodo addTodo={addTodo}/>
      <Footer/>
      <Todos todos={todos} onDelete={onDelete}/>
    
    </div>
  )
}
