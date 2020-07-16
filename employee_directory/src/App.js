import React from "react";
import Wrapper from "./components/Wrapper/index";
import Title from "./components/Title/index";
import TableHeader from "./components/TableHeader/index"

function App() {
  return (
    <Wrapper>
      <Title>Parks Directory</Title>
      <TableHeader/>
    </Wrapper>
  );
}

export default App;
