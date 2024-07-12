import { useState } from "react";
import React from "react";

function DisplayData(props) {

  // Search code
  const [searchTerm, setSearchTerm] = useState('');
  // Maintain a copy of the original data
  const originalData = props.transactions;

//   Use of conditional rendering. 
// Conditional rendering says, if there is a serach term, then the data should be filterd and only the searched data
// should be rendered, or else the original data shuld be displayed
  const filteredData = searchTerm
    ? originalData.filter(employee => employee.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : originalData;
    

  // Edit code
  const [rowKey,setRowKey]=useState('')
  return (
    <div>
      <h1>Employee Data</h1>
      <input
        type="text"
        placeholder="Search.."
        onChange={(event) => setSearchTerm(event.target.value)}
        // onKeyDown={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through either filtered data or original data */}
          {/* Also conditional rendering used to show the filterd data if there is a search or show the original data if there is no search */}
          {searchTerm ? (
            filteredData.map((data) => (
              <tr key={data.name}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.number}</td>
                <td>{data.position}</td>
                <td>
                  <button onClick={() => props.remove(data.name)}>Delete</button>
                  <button onClick={setRowKey(data.name)}>Update</button>
                </td>
              </tr>
            ))
          ) : (
            originalData.map((data) => (
              <tr key={data.name}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.number}</td>
                <td>{data.position}</td>
                <td>
                  <button onClick={() => props.remove(data.name)}>Delete</button>
                  <button>Update</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayData;







