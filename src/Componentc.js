import React,{useContext,useEffect} from 'react'
import {firstname,lastname} from './App'


function Componentc() {
    const fname=useContext(firstname);
    const lname=useContext(lastname);
    useEffect(() => {

        return prompt("yess you you ");
    })
    return (
        <div>
           <h1> hello {fname}  {lname} </h1>
        </div>
    )
}

export default Componentc
