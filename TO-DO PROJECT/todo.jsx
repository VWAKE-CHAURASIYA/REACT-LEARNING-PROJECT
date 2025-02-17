import { useEffect, useState } from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

import './Todo.css';
export const TodoList = ()=>
{
    // eslint-disable-next-line no-unused-vars
    const [inputvalue, setInputValue]= useState("");        //defining use state...
    // ? once we get the input value , we need ot sttore it in the array , so for that we need state again
    

    const [task, setTask] = useState([]);

const handleInputchange = (value)=>
{
  setInputValue(value);
}

const handleFormSubmit = (event)=>
{
 event.preventDefault();                   

if (!inputvalue) return ;    //if arrayis empty 

if (task.includes(inputvalue)){
    setInputValue("");
    return;
}      //validation 3: use to check for repeatative task , task is array

setTask((prevTask)=> [...prevTask, inputvalue ]);    //validation 4: use to store previouis task

setInputValue("") ;                               //removing form input box and passing to state

}


const [datetime, setDateTime]= useState("");

// todo date and time 


//! If we don't want memory leaking problem, than we use useEffect: fot that we need to store interval in one varibale.   -------------------        useEffect(()=>{}, []); ----------------------

useEffect(()=>{
    // eslint-disable-next-line no-unused-vars
    const interval = setInterval(() => {     
        let now = new Date();
        let formateddate = now.toLocaleDateString();
        let formatedtime = now.toLocaleTimeString();
        
        
        
        setDateTime(`${formateddate} -- ${formatedtime}`);         
            }, 1000);

            return ()=> clearInterval(interval);
} , [])


//!  funciton for deleting paritcular item
const handleDeleteTodo = (value)=>
{
console.log(task);
console.log(value);
// now we got the value which we clicked, now for deleting we use filter method. by which it removes unwantedlist
const updatedtask  = task.filter((currtask)=>currtask !==value); //returning value which we don't want
setTask(updatedtask) ;                //putting the value to usestate to store remaing items except dlete one.
}


//! fucntion for clear all button 
const handlecleartodo = ()=>
{
    setTask([]);                   //to dlete all the list of elements
}


    return(
        <>
        <section className="todo-container">
            <header>
                <h1>To do List</h1>
                <h2 className="date-time">{datetime}</h2>
            </header>

            <section className="form">
                <form                  onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" 
                        className='todo-input' 
                        autoComplete='off' 
                        value={inputvalue} 
                        onChange={(event)=>handleInputchange(event.target.value)} />
                    </div>

                    <div>
                        <button type='submit' className='todo-btn'>Add Task</button>
                    </div>
                </form>
            </section>

            {/* creating a new sesction to present task on webpages  */}

            <section className="mylist">
                <ul>
                    {
                        task.map((currtask, index)=>
                        {
                            return <li key= {index} >
                                <span>{currtask}</span>
                                              {/*Implementing react icons */}
                            <button className='checkbtn'><IoMdCheckmark /></button>  


                            <button className="deletebtn" 
                            onClick={()=>handleDeleteTodo(currtask)}>{/*when user click than funcitoncal*/}
                            <MdDeleteForever />
                            </button> 
                            </li>       
                        })
                    }
                </ul>
            </section>

            {/* creating section for deleting all list at once:  */}
            <section>
                <button className="clear-btn"  onClick={handlecleartodo}>Clear All</button>
            </section>
        </section>
        </>
    )
}
