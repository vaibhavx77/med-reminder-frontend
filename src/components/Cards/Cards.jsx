import React from "react";
import styles from "./Cards.module.css"
import { useState } from "react";

function Cards(props){

    const [btnColor ,setBtnColor] = useState(false)
    const [textColor ,setTextColor] = useState(false)

    function hoverColor(){
        setBtnColor(true)
        setTextColor(true)
    }
    function defColor(){
        setBtnColor(false)
        setTextColor(false)

    }


    return<>
    

    <div className={styles.card}>
        <h3>{props.name}</h3>
        <h4>{props.mobile}</h4>
        <h4>{props.medName}</h4>
        <h4>{props.dosage}</h4>
        <h5>{props.remindAt}</h5>
        <button onMouseEnter={hoverColor} onMouseLeave={defColor} style={{ backgroundColor: btnColor ? "black": "white", color: textColor ? "white": "black"  }} onClick={() => props.deleteReminderCall(props.id)} className={styles.delBtn}>Delete</button>
    </div>
   
    </>
}

export default Cards;