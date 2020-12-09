import React from "react";
import { Component } from "react";
// import Navbar from "./Navbar.js";
import EmployeeTable from "./EmployeeTable.js"
import API from "../utils/API.js";

export default class Body extends Component {
    state= {
        users: [{}],
        sortedUsers: [{}]
    }
    heading = [
        "Image", "Name", "Phone", "Email", "DOB"
    ]

    componentDidMount() {
        API.getUsers().then(results => {
            this.setState({
                users: results.data.results,
                sortedUsers: results.data.results
            });
        });
    }

    checkA() {
            this.setState({
                ...this.state.users,
                sortedUsers: this.state.users.filter(user => user.name.first.charAt(0) === "A")
            })
    } 

    sortAlpha() {
        this.setState({
            ...this.state.users,
            sortedUsers: this.state.users.sort((a, b) => a.name.last.localeCompare(b.name.last))
        })
    }



    render() {
        return (
            <>
            <button onClick={()=> this.checkA()}>Check A</button>
            <button onClick={()=> this.sortAlpha()}>Sort Alpha</button>
            <div className="data-area">
            <EmployeeTable 
                heading = {this.heading}
                users={this.state.sortedUsers}
                handleSort={this.handleSort}
            />
            </div>
            </>

        );
    }
}
