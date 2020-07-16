import React from "react";
import "./style.css";
import Table from 'react-bootstrap/Table'

function TableOfPeople(props) {
  return (
    // need to map to employee.json 
    // follow activity 12 for props example may not be able to map this way. also see activity 13
    <tbody>
      <tr>
        <td>
          <img alt={props.name} src={props.image}/>
        </td>
        <td>{props.name}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.dob}</td>
      </tr>
    </tbody>

  );
}

export default TableOfPeople;
