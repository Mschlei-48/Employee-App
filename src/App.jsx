import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './form.jsx'
import DisplayData from './display.jsx'

function App() {
  // This is declared here because we need it to be a global variable, so that it can be injected
  // accessed by the other child components that
  // We need it to be global so we can use it on the other components as props
  // Also the functions you will use need to be in this file as well for the same reason, bevause in order for other components ti access them
  // they have to be declared here because being declared here makes them global
  const [transactions,setTransactions]=useState([])
  // const [table,setTable]=useState([{Name:'',Email:'',Number:'',Position:''}])
  const [searchInfo,setSearchInfo]=useState([])

  const add=((name,email,number,position)=>{
      setTransactions((transactions)=>[...transactions,{name:name, email:email,number:number,position:position}]) 
  })

  const remove=((name)=>{
    const newEmployees=transactions.filter((employee)=>employee.name!==name);
    setTransactions(newEmployees)
  })


  return (
    <>
      <Form add={add}/>
      <DisplayData transactions={transactions} remove={remove}/>
    </>
  )
}

export default App
