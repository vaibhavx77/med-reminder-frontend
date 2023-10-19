import React from "react";
import styles from "./TopSection.module.css"
import Btn from "../Btn/Btn";
import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

function TopSection(props){


    return   <>
    <div className={styles.logo}>
        <h1>MedReminder</h1>
    </div>
     <div className={styles.inputBox}>
    <div className={styles.header}>
    <h2>Set Reminder</h2>

    </div>
    <div className={styles.inputs}>
    <p>This is a demo project, therefore the character count is limited to 10 characters only.</p>
    <input maxLength={10} type="text" placeholder="Enter name.." value={props.nameValue} onChange={props.setName}/>
    <input maxLength={10} type="number" placeholder="Enter Mobile No."  value={props.mobileValue} onChange={props.setMobile} />
    <input maxLength={10} type="text" placeholder="Medicine Name"  value={props.medNameValue} onChange={props.setMedName}/>
    <input maxLength={5} type="text" placeholder="Dosage"  value={props.dosageValue} onChange={props.setDosage}/>

    </div>
     <div className={styles.datePicker}>

    <DateTimePicker 
        value={props.remindAtValue}
        onChange={props.setRemindAt}
        minDate={new Date()}
        minutePlaceholder="mm"
        hourPlaceholder="hh"
        dayPlaceholder="DD"
        monthPlaceholder="MM"
        yearPlaceholder="YYYY"

    />
     </div>
    <div className={styles.submitBtn}>
        <Btn setBtn={props.addReminder}
         btnName = "SET" />
    </div>



    </div>

    </>
    
}

export default TopSection;