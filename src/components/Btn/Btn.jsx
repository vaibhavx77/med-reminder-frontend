import React, { useState } from "react";
import styles from "./Btn.module.css";


function Btn(props){
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
    return <>
    <div className={styles.setBtn}>
    <button onMouseEnter={hoverColor} onMouseLeave={defColor} style={{ backgroundColor: btnColor ? "black": "white", color: textColor ? "white": "black"  }} onClick={props.setBtn}>{props.btnName}</button>

    </div>

    </>
}


export default Btn;