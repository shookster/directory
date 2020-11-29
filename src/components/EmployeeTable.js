import React from "react";

function EmployeeTable ({ heading}) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {heading.map(({name})=> {
                            return (
                                <th>
                                    {name}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default EmployeeTable