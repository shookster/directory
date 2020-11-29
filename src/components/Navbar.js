import React from "react";
import Search from "./Search.js";

function Navbar({handleSearch}) {
    return (
        <nav>
            <div>
                <Search handleSearch={handleSearch}/>
            </div>
        </nav>
    )
}

export default Navbar