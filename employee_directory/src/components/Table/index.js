import React from "react";
import "./style.css";
// import Table from 'react-bootstrap/Table'
import employees from "./employee.json"

function TableOfPeople() {
  return (
    // need to map to employee.json 
    // follow activity 12 for props example may not be able to map this way.
    <div>
      <ul>
        {employees.map(items => (<li key={items.id}>{items.name}</li>))}
      </ul>
    </div>
  );
}

export default TableOfPeople;
