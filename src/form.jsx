import { useState } from "react";
import './form.css'
function Form(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [position, setPosition] = useState("");

  const add=(()=>{
    props.add(name,email,number,position);
  })
  return (
    <>
    <h1>Enter Employee Data</h1>
        <label className="label">Full Name:</label>
        <br></br>
        <input name="name" type="text" className="input" onChange={(event) => setName(event.target.value)}></input>
        <br></br>
        <br></br>
        <label className="label">Email Address:</label>
        <br></br>
        <input
          name="email"
          type="text"
          className="input"
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <br></br>
        <br></br>
        <label className="label">Phone Number:</label>
        <br></br>
        <input
          name="number"
          type="text"
          className="input"
          onChange={(event) => setNumber(event.target.value)}
        ></input>
        <br></br>
        <br></br>
        <label className="label">Position:</label>
        <br></br>
        <input
          name="number"
          type="text"
          className="input"
          onChange={(event) => setPosition(event.target.value)}
        ></input>
        <br></br>
        <br></br>
        {/* <label className="label">Image:</label>
        <input
          name="image"
          type="file"
          className="input"
          accept="image/*"
          onChange={(event) => setImage(event.target.value)}
        ></input> */}
        <br></br>
        <br></br>
        <button type="submit" onClick={add}>
          Sumbit Data
        </button>

    </>
  );
}
export default Form;

