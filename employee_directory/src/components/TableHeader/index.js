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
            default: [],
            name: ""
        }
    };

    componentDidMount() {
        this.setState({ result: employees, default: employees })
        console.log(this.state)
    };

    handleInputChange = event => {
        event.preventDefault()
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
        console.log(this.state)

        const filter = this.state.default.filter(employees => {

            // console.log(employees.name.includes(this.state.name))
            return (employees.name.includes(this.state.search))
        });

        this.setState({ result: filter })
        console.log(this.state.result)
    }

    onToggleClick = () => {
        console.log("hi")
        if (this.state.sort === "descend") {
            let ascending = this.state.result.sort((a, b) =>
                a.name > b.name ? 1 : -1
            )
            this.setState({ result: ascending, sort: "ascend" })
        } else {
            let descending = this.state.result.sort((a, b) =>
                a.name < b.name ? 1 : -1
            )
            this.setState({ result: descending, sort: "descend" })
        }
    }



    render() {
        return (
            <>
                <Search search={this.state.search} handleInputChange={this.handleInputChange} />

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th onClick={() => { this.onToggleClick() }}>Name<span className="dropdown-toggle"></span></th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Date of Birth</th>
                        </tr>
                    </thead>
                    {this.state.result.map(people => (
                        <TableOfPeople
                            key={people.id}
                            name={people.name}
                            image={people.image}
                            phone={people.phone}
                            email={people.email}
                            dob={people.dob}
                        />
                    ))}
                </Table>

            </>
        )

    }
}

export default TableHeader;