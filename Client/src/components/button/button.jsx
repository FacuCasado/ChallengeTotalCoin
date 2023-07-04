import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getButtons } from "../../Redux/actions";
import styles from "./button.module.css";

function Button({id, name, counter, flag}){
    const dispatch=useDispatch();
    const[disabled, setDisabled]=useState(false)

    const handleClick=async()=>{

        if(disabled) return;
        setDisabled(true)
        axios.patch(`/buttons/${id}`)
        .then(()=>dispatch(getButtons()))
        .then(()=>flag())
        .then(()=>setDisabled(false))
    }

    return (
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${disabled ? styles.disabled : ""}`}
            onClick={handleClick}
            disabled={disabled}
          >
            {disabled?'X':name}
          </button>
          <div className={styles.counter}>Counter: {counter}</div>
        </div>
      );

}

export default Button