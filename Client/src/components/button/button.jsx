import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getButtons } from "../../Redux/actions";
import styles from "./button.module.css";

function Button({id, name, counter}){
    const dispatch=useDispatch();
    const[disabled, setDisabled]=useState(false)

    //Manejador de clicks al boton
    const handleClick=async()=>{
        if(disabled) return;
        setDisabled(true)
        await axios.patch(`/${id}`)
        dispatch(getButtons())
        setDisabled(false)
    }
    //Manejador del boton para eliminar
    const handleDelete=async()=>{
        await axios.delete(`/${id}`)
        dispatch(getButtons())
    }

    return (
        <div className={styles.buttonContainer}>
            <button onClick={handleDelete} className={styles.closeButton}>x</button>
            <button
                className={`${styles.button} ${disabled ? styles.disabled : ""}`}
                onClick={handleClick}
                disabled={disabled}
            >
                {disabled?'X':name}
            </button>
            <div className={styles.counter}>Clicks: {counter}</div>
        </div>
      );

}

export default Button