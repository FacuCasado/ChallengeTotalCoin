import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getButtons } from "../../Redux/actions";

function NewButton({first}){

    const dispatch=useDispatch();
    const [body, setBody]=useState({})

    const handleSubmit=async(event)=>{
        event.preventDefault()
        await axios.post('/buttons',body)
        dispatch(getButtons())
        setBody({})
    }

    const handleChange=(event)=>{
        setBody({name:event.target.value})
    }

    return(
        <form>
            <input type='text' placeholder='Número de botón' value={body.name?body.name:''} onChange={handleChange}></input>
            <button type='submit' onClick={handleSubmit}>{!first?'Primer botón':'Agregar botón'}</button>
        </form>
    )

}

export default NewButton