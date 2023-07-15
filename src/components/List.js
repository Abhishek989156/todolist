import React from 'react'

function List(props) {
  return (
    <div>
     
        <div> 
        <h1>{props.taskname}</h1> 
        <button onClick={()=>props.deleteele(props.id)}>X</button></div> 

     </div>
       
        
  )
}

export default List
