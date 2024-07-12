import { useState } from 'react';
import './App.css';
import Form from './form.jsx';
import DisplayData from './display.jsx';

function App() {
  const email_pattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  const [transactions, setTransactions] = useState([]);
  const number_pattern=/^\d{10}$/;
  const [duplicate,setDuplicate]=useState(false);

  const add = (name, email, number, position) => {
    
    if(transactions.map((employee)=>employee.email==email).includes(true)===true){
      alert("Email is already used")
    }
    else if(transactions.map((employee)=>employee.number==number).includes(true)===true){
      alert("Number is already used")
    }
    else if(name===''){
      alert('Please enter name');
    }
    else if(email_pattern.test(email)==false){
      alert('Please valid email');
    }
    else if(position===''){
      alert("Please enter your position");
    }
    else if(duplicate===true) {
      alert("You are already added to the system");
    }
    else{
      setTransactions([...transactions, { name, email, number, position }]);
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

  const validate=((input)=>{

  })

  return (
    <div className="main-content">
      <div className='form'>
        <Form add={add} />
      </div>
      <div className='display'>
        <DisplayData transactions={transactions} remove={remove} edit={edit} />
      </div>
    </div>
  );
}

export default App;

