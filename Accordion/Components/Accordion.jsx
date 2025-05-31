import { useEffect, useState } from "react";
import { FAQ } from "./FAQ";                
import faq from "../API/faq.json";

export const Accordion=()=>
{
    const[data, setdata]=useState([]);     
const[activeID, setactiveID]= useState(null); 

useEffect(()=>{
setdata(faq);   
},[]); 

 
const handleButton = (id)=>
{
    setactiveID((prevId)=> (prevId === id ? null : id))       
}
    return(
        <>
           <h1>The Accordion</h1>
           <ul className="section-accordion">
            { 

                data.map((curElem)=>
                {return(
                <FAQ key={curElem.id} curData = {curElem}              
            isActive={activeID === curElem.id}           
            onToggle={()=>handleButton(curElem.id)}/>   
                    )
                })
            }
           </ul>
        </>
    )
}
