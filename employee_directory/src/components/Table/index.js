import React from "react";
import "./style.css";
// import Table from 'react-bootstrap/Table'
import employees from "../../employee.json"

function TableOfPeople() {
  return (
    // need to map to employee.json 
    // follow activity 12 for props example may not be able to map this way. also see activity 13
      <ul>
        {employees.map(items => (<li key={items.id}>{items.name}</li>))}
      </ul>
  );
}

export default TableOfPeople;
