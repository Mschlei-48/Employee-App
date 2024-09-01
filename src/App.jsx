import { useState } from 'react';
import './App.css';
import Form from './form.jsx';
import DisplayData from './display.jsx';


// 2. Check if tehre is data in the table and if tehre is none, then display a text that indicates that there is currently no data

function App() {
  const email_pattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  const [transactions, setTransactions] = useState([]);
  const number_pattern=/^\d{10}$/;
  const [duplicate,setDuplicate]=useState(false);
  const [radioInput,setRadioInput]=useState('Table');


  const add = (name, email, number, position,id) => {
    
    if(transactions.map((employee)=>employee.email==email).includes(true)===true){
      alert("Email is already used")
    }
    else if(transactions.map((employee)=>employee.number==number).includes(true)===true){
      alert("Number is already used")
    }
    else if(name===''){
      alert('Please enter name');
    }
    else if(id.length<13 && id===''){
      alert("Enter valid ID Number")
    }
    else if(email_pattern.test(email)==false){
      alert('Please enter valid email');
    }
    else if(position===''){
      alert("Please enter your position");
    }
    else if(duplicate===true) {
      alert("You are already added to the system");
    }
    else{
      setTransactions([...transactions, { name, email, number, position }]);
      alert("Employee Added Successfully")
    }
    
  };

  const remove = (name) => {
    const newEmployees = transactions.filter((employee) => employee.name !== name);
    setTransactions(newEmployees);
  };

  const edit = (updatedTransaction) => {
    const newTransactions = transactions.map((transaction) =>
      transaction.name === updatedTransaction.name ? updatedTransaction : transaction
    );
    setTransactions(newTransactions);
  };

  const toggle=((input)=>{
    if(input==='Form')
    {
      return <Form add={add} /> 
    }
    else if(input=='Table'){
      if(transactions.length===0){
        return <h2 id='no-data'>No Data To Display Yet!!</h2>
      }
      else{
        return <DisplayData transactions={transactions} remove={remove} edit={edit}/>
      }
      
    }
    
  })
  

  return (
    <div className="main-content">
      <div style={{marginBottom:"290px"}}>
      <h1 style={{marginLeft:"450px",width:"550px"}}>Employee App</h1>
      </div>
        <button  onClick={()=>setRadioInput("Form")} style={{backgroundColor:"blue",color:"white",position:"absolute",top:"170px",marginLeft:"360px",height:"80px",width:"250px"}}>Enter Employee Data</button>
        <button  onClick={()=>setRadioInput("Table")} style={{backgroundColor:"black",color:"white",position:"absolute",top:"170px",marginLeft:"660px",height:"80px",width:"250px"}}>View Employee Data</button>
      <div className='form'>
        {toggle(radioInput)}
      </div>
    </div>
  );
}

export default App;

