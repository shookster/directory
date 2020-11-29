import React from "react";
import { Component } from "react";
import Navbar from "./Navbar.js";
import EmployeeTable from "./EmployeeTable.js"

export default class Body extends Component {
    state= {
        users: [{}],
        sortedUsers: [{}],
        order: "descending"
    }
    heading = [
        "Image", "Name", "Phone", "Email", "DOB"
    ]
    handleSearch = event => {
        console.log(event.target.value)
    }
    render() {
        return (
            <>
            <Navbar handleSearch = {this.handleSearch}/>
            <EmployeeTable heading = {this.heading}/>
            </>

        )
    }
}
