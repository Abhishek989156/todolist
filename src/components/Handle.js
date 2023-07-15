import React , { useState }from 'react'
import List from './List';

function Handle() {
    const[data,setdata]=useState([]);
    const[value,setvalue]=useState("");

function mychange(event)
{
    setvalue(event.target.value);
}
function mysave()
{
    const task ={
        id: data.length === 0 ? 1 : data[data.length-1].id + 1,
        taskname: value,
    }
   
    setdata([...data,task]);
    
    
}
console.log(data)

function deleteele(id)
{
   
     setdata(data.filter((task)=>{ return task.id!==id}));  

}
  return (
    <div>
        <div>
        <h1>To Do List</h1>
        <input type='text' placeholder='Enter your' onChange={mychange}></input>
        <button onClick={mysave}>Submit</button>
    
    </div>

    <div>

    {
        data.map((task)=>{
        return <List
          deleteele={deleteele}
          taskname={task.taskname} 
          id={task.id}
           ></List>
        }) 
    }
    
    </div>
   
   
      
    </div>
  )
}

export default Handle; 