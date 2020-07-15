import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import TableOfPeople from "./components/Table";
import employees from "./employee.json"

function App() {
  return (
    <Wrapper>
      <Title>Parks Directory</Title>
      <TableOfPeople />
    </Wrapper>
  );
}

export default App;
