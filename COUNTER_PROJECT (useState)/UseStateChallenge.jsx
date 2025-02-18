import { useState } from 'react'
import '../useState.css'

export const UseStateChallenge = ()=>
{

    // fucntions for buttons : 


    const [count, setvalue] = useState(0);          //for perfomring count operation-increment decrement, reset
    const [step, Setstep] = useState(0);

    const setincrement = ()=>
    {
        // setvalue(count + 1);
        setvalue(count + step);
    }

    const setdecrement = ()=>
        {
            // setvalue(count - 1);
            setvalue(count - step);
        }

    const setreset = ()=>
    {
        setvalue(0);
    }


    return (
        <>
        <section className="container">
            <header>
                <h1>useState Challenge</h1>
            </header>
            <section className='count'>
                <span>
                 COUNT :  
                <p className="displaycount">{count}</p>
                </span>
            </section>

            <section className="step">
                <label>
                    STEP :
                </label>
                <input type="number"   
                value={step}       /*value attribute are used to take current state value, setstep are used to concatinate and perfomr the operation by using step to inc, dec */
                
                onChange={(e)=>Setstep(Number(e.target.value))}/> 
                                        
            </section>


            {/* creating a button:  */}
            <section className="btn">
                <button className="increment" onClick={setincrement} disabled={count>=100}>Increment</button>
                <button className="decrement" onClick={setdecrement} disabled={count<0}>Decrement</button>
                <button className="reset" onClick={setreset}>Reset</button>
            </section>
        </section>

        </>
    )
}
