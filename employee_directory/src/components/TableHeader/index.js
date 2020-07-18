import React, { Component } from "react";
import Table from "react-bootstrap/Table"
import Search from "../SearchForm/index"
import TableOfPeople from "../Table/index"
import employees from "../../employee.json"
import "./style.css"


class TableHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            result: [],
            default: []
        }
    };

    componentDidMount() {
        this.setState({ result: employees, default: employees })
    };

    handleInputChange = event =>{
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
        const filter = this.state.default.filter(employee =>{
            return(employee.name)
        });
        this.setState({results: filter})
    }

    render() {
        return (
            <>
                <Search search={this.state.search} handleInputChange={this.handleInputChange} />

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Date of Birth</th>
                        </tr>
                    </thead>
                    <TableOfPeople
                        name={employees[0].name}
                        image={employees[0].image}
                        phone={employees[0].phone}
                        email={employees[0].email}
                        dob={employees[0].dob}
                    />
                    <TableOfPeople
                        name={employees[1].name}
                        image={employees[1].image}
                        phone={employees[1].phone}
                        email={employees[1].email}
                        dob={employees[1].dob}
                    />
                    <TableOfPeople
                        name={employees[2].name}
                        image={employees[2].image}
                        phone={employees[2].phone}
                        email={employees[2].email}
                        dob={employees[2].dob}
                    />
                    <TableOfPeople
                        name={employees[3].name}
                        image={employees[3].image}
                        phone={employees[3].phone}
                        email={employees[3].email}
                        dob={employees[3].dob}
                    />
                    <TableOfPeople
                        name={employees[4].name}
                        image={employees[4].image}
                        phone={employees[4].phone}
                        email={employees[4].email}
                        dob={employees[4].dob}
                    />
                    <TableOfPeople
                        name={employees[5].name}
                        image={employees[5].image}
                        phone={employees[5].phone}
                        email={employees[5].email}
                        dob={employees[5].dob}
                    />
                    <TableOfPeople
                        name={employees[6].name}
                        image={employees[6].image}
                        phone={employees[6].phone}
                        email={employees[6].email}
                        dob={employees[6].dob}
                    />
                    <TableOfPeople
                        name={employees[7].name}
                        image={employees[7].image}
                        phone={employees[7].phone}
                        email={employees[7].email}
                        dob={employees[7].dob}
                    />
                    <TableOfPeople
                        name={employees[8].name}
                        image={employees[8].image}
                        phone={employees[8].phone}
                        email={employees[8].email}
                        dob={employees[8].dob}
                    />
                    <TableOfPeople
                        name={employees[9].name}
                        image={employees[9].image}
                        phone={employees[9].phone}
                        email={employees[9].email}
                        dob={employees[9].dob}
                    />
                    <TableOfPeople
                        name={employees[10].name}
                        image={employees[10].image}
                        phone={employees[10].phone}
                        email={employees[10].email}
                        dob={employees[10].dob}
                    />
                </Table>

            </>
        )

    }
}

export default TableHeader;