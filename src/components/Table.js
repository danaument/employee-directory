import React, { Component } from "react";
import Search from "./Search";
import Results from "./Results";
import PersonCard from "./PersonCard";
import API from "../utils/API";
import Filter from "./Filter";
import Sort from "./Sort";

export default class Table extends Component {
  state = {
    results: [],
    displayMsg: "",
    query: "",
  };

  componentDidMount() {
    this.getPeople();
  }

  getPeople = () => {
    API.search()
      .then((res) => {
        this.setState({
          results: res.data.results,
          displayMsg: "Showing random results from randomuser.me",
        });
        console.log(this.state.results);
      })
      .catch((err) => console.log(err));
  };

  handleSearch = (query) => {
    query = query.toLowerCase();
    const filteredResults = this.state.results.filter((person) =>
      `${person.name.first}${person.name.last}`.toLowerCase().includes(query)
    );
    this.setState({
      results: filteredResults,
      displayMsg: `Showing results for "${query}"`,
    });
  };

  //   handleSort = (query) => {
  //       const sortedResults = this.state.results.sort(person =.)
  //   }

  render() {
    return (
      <div>
        <Search>
          <Filter
            handleSearch={this.handleSearch}
            query={this.state.query}
            handleQueryChange={this.handleQueryChange}
          />
          <Sort />
        </Search>

        <Results displayMsg={this.state.displayMsg}>
          {this.state.results.map((result) => (
            <PersonCard
              name={result.name}
              state={result.location.state}
              picture={result.picture.large}
              age={result.dob.age}
              key={result.login.uuid}
            />
          ))}
        </Results>
      </div>
    );
  }
}
