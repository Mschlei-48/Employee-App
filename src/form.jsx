import { useState } from "react";
import './form.css'
function Form(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [position, setPosition] = useState("");
  const [id, setID] = useState("");
  const [image,setImage]=useState("")

  const add=(()=>{
    props.add(name,email,number,position,id,image);
  })
  return (
    <>
    <h1>Enter Employee Data</h1>
        <input name="name" type="text" className="input" placeholder='Enter Name' onChange={(event) => setName(event.target.value)}></input>
        <br></br>
        <br></br>
        <input
          name="email"
          type="text"
          className="input"
          placeholder='Enter Email Address'
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <br></br>
        <br></br>
        <input
          name="number"
          type="text"
          className="input"
          placeholder='Enter Number'
          onChange={(event) => setNumber(event.target.value)}
        ></input>
        <br></br>
        <br></br>
        <input
          name="position"
          type="text"
          className="input"
          placeholder='Enter Position'
          onChange={(event) => setPosition(event.target.value)}
        ></input>
        <br></br>
        <br></br>
        <input name="id" type='text' className='input' placeholder='Enter ID Number' onChange={(event)=>setID(event.target.value)}></input>
        <br></br>
        <br></br>
        <input name="image" type='text' className='input' placeholder='Enter Image URL' onChange={(event)=>setImage(event.target.value)}></input>
        <br></br>
        <br></br>
        <button className='submit-form' onClick={add}>
          Sumbit Data
        </button>
    </>
  );
}
export default Form;

