import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Axios from "axios";
import DateTimePicker from "react-datetime-picker";
import './App.css'
import Cards from './components/Cards/Cards';
import TopSection from './components/TopSection/TopSection';

function App() {
     const [name, setName] = useState("");
     const [mobile, setMobile] = useState("")
     const [medName, setMedName] = useState("")
     const [dosage, setDosage] = useState("")
     const [remindAt, setRemindAt] = useState()

  const [reminderData, setReminderData] = useState([])


  useEffect(()=>{
    Axios.get("http://localhost:3000/allReminders").then((response) => {
      setReminderData(response.data)
    })
  }, [])

  function addReminder(){
    Axios.post("http://localhost:3000/setReminder", {name, mobile, medName, dosage, remindAt}).then(response => {
      setReminderData(response.data)
      setName("")
      setMobile("")
      setMedName("")
      setDosage("")
      setRemindAt()
    })
  }
  function deleteReminder(id){
    Axios.post("http://localhost:3000/deleteReminder",{id}).then(response => {
      setReminderData(response.data)
    })
  }
  

  return (
    <>
    <div className='container'>
    <div className='inputSection'>
    <TopSection
    setName = {(e) => {setName(e.target.value)}}
    setMobile = {(e) => {setMobile(e.target.value)}}
    setMedName = {(e) => {setMedName(e.target.value)}}
    setDosage = {(e) => {setDosage(e.target.value)}}
    setRemindAt = {setRemindAt}
    remindAtValue = {remindAt}
    addReminder = {addReminder}
    nameValue = {name}
    mobileValue = {mobile}
    medNameValue = {medName}
    dosageValue = {dosage}
    

     />

    </div>
    <div className='cardSection'>
    <div className='cardGrid'>
    {reminderData.map((rem) => {
      return <Cards 
        key = {rem._id}
        name = {rem.name}
        mobile = {rem.mobile}
        medName = {rem.medName}
        dosage = {rem.dosage}
        id = {rem._id}
        remindAt = {String(new Date(rem.remindAt).toLocaleString(undefined, {timeZone: "Asia/Kolkata"}))}
        deleteReminderCall = {deleteReminder}
      />
    })}
      

    </div>


    </div>

    </div>
     <footer>
      Copyright 2023
     </footer> 
    </>
  )
}

export default App
