import React from "react";
import { Component } from "react";
import Navbar from "./Navbar.js";
import EmployeeTable from "./EmployeeTable.js"
import API from "../utils/API.js";

export default class Body extends Component {
    state= {
        users: [{}],
        sortedUsers: [{}],
        order: "descending"
    }
    heading = [
        "Image", "Name", "Phone", "Email", "DOB"
    ]
    handleSearch = heading => {
        console.log(this.target.value)
        if (this.state.order === "descending") {
            this.setState({
                order: "ascending"
            })
        } else {
            this.setState({
                order: "descending"
            })
        } 
        
        const compareFnc = (a, b) => {
            if (this.state.order === "ascend") {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
                else if (heading === "name") {
                    return a[heading].first.localeCompare(b[heading].first);
                } else {
                    return a[heading] - b[heading];
                }
            } else {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
                else if (heading === "name") {
                    return b[heading].first.localeCompare(a[heading].first);
                } else {
                    return b[heading] - a[heading];
                }
            }
        }
        const sortedUsers = this.state.sortedUsers.sort(compareFnc);
        this.setState({ sortedUsers: sortedUsers });
    }

    handleSearchChange = event => {
        console.log(event.target.value);
        const filter = event.target.value;
        const filteredList = this.state.users.filter(item => {
            let values = Object.values(item)
            .join("")
            .toLowerCase();
        return values.indexOf(filter.toLowerCase()) !== -1;
        })
        this.setState({ sortedUsers: filteredList });
    }
    componentDidMount() {
        API.getUsers().then(results => {
            this.setState({
                users: results.data.results,
                sortedUsers: results.data.results
            });
        });
    }

    render() {
        return (
            <>
            <Navbar handleSearch = {this.handleSearch}/>
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
