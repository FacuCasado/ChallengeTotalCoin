import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getButtons } from "../../Redux/actions";

function NewButton({first}){

    const dispatch=useDispatch();
    const [body, setBody]=useState({})
    const [error, setError]=useState('');

    const handleSubmit=async(event)=>{
        event.preventDefault()
        await axios.post('/buttons',body)
        dispatch(getButtons())
        setBody({})
    }

    const handleChange=(event)=>{
        const value=event.target.value
        const regex=/^\d+$/
        if(regex.test(value)){
            setBody({name:event.target.value})
            setError('')
        }else{
            setBody({})
            setError('El valor ingresado debe ser un número')
        }
    }

    return(
        <form>
            <input type='text' placeholder='Número de botón' value={body.name?body.name:''} onChange={handleChange}></input>
            <button type='submit' onClick={handleSubmit} disabled={error||!body.name}>{!first?'Primer botón':'Agregar botón'}</button>
            {error&&<p>{error}</p>}
        </form>
    )

}

export default NewButton