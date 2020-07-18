import React from "react";
import Form from "react-bootstrap/Form"
import "./style.css";

const SearchBar = ({search, handleInputChange})=>{
    return(
        <Form className="text-center">
            <Form.Group>
                <Form.Label>Search for the character youre looking for!</Form.Label>
                <Form.Control 
                    type="text" 
                    name="search" 
                    value={search}
                    onChange={handleInputChange} 
                    placeholder="Search Directory!">
                </Form.Control>
            </Form.Group>
        </Form>
    )
}

export default SearchBar;


