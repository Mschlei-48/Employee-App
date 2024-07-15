import { useState } from 'react';
import React from 'react';
import './display.css'

function DisplayData(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [editRow, setEditRow] = useState(null);
  const [editedData, setEditedData] = useState({ name: '', email: '', number: '', position: '' });

  const originalData = props.transactions;

  const filteredData = searchTerm
    ? originalData.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : originalData;

  const handleEditClick = (data) => {
    setEditRow(data.name);
    setEditedData(data);
  };

  const handleSaveClick = () => {
    props.edit(editedData);
    setEditRow(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  return (
    <>
      <h1>Employee Data</h1>
      <input
        type="text"
        placeholder="Search.."
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Position</th>
            <th>Delete Action</th>
            <th>Update Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data) => (
            <tr key={data.name}>
              {editRow === data.name ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={editedData.name}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      value={editedData.email}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="number"
                      value={editedData.number}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="position"
                      value={editedData.position}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <button onClick={handleSaveClick} className='btn'>Save</button>
                    <button onClick={() => setEditRow(null)} className='btn'>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.number}</td>
                  <td>{data.position}</td>
                  <td>
                    <button onClick={() => props.remove(data.name)} className='btn'>Delete</button>
                  </td>
                  <td>
                    <button onClick={() => handleEditClick(data)} className='btn'>Update</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DisplayData;








