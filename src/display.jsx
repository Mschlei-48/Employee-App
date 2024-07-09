import { useState } from "react";
import React from "react";

function DisplayData(props){


    return(
        <div>
            <h1>Employee Data</h1>
            <table>
                        <tr>
                            <th>Names</th>
                            <th>Email Addresses</th>
                            <th>Phone Numbers</th>
                            <th>Position</th>
                        </tr>
            </table>
            {props.transactions.map((data)=>(
                <div>
                <table id="data-table">
                        <tr>
                        <td>
                            <h6>{data.name}</h6>
                        </td>
                        <td>
                            <h6>{data.email}</h6>
                        </td>
                        <td>
                            <h6>{data.number}</h6>
                        </td>
                        <td>
                            <h6>{data.position}</h6>
                        </td>
                        <td>
                            <button>Delete</button>
                            <button>Update</button>
                        </td>
                        </tr>
                    </table>

                </div>
            ))}
            
        </div>
    )
}
export default DisplayData;

