import React, { Component } from "react";

function Search ({handleSearch}) {
  return (
    <div>
      <form>
        <input type="search" placeholder="Search" onChange={event => handleSearch(event)} />
      </form>
    </div>
  )
}

export default Search;
