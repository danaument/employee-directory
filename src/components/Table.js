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
          query: "",
        });
        console.log(this.state.results);
      })
      .catch((err) => console.log(err));
  };

  handleSearch = () => {
    const query = this.state.query.toLowerCase();
    const filteredResults = this.state.results.filter((person) =>
      `${person.name.first}${person.name.last}`.toLowerCase().includes(query)
    );
    this.setState({
      results: filteredResults,
      displayMsg: `Showing results for "${query}"`,
      query: "",
    });
  };

  handleSort = () => {
    const sortedResults = this.state.results.sort(
      (a, b) => {
          return a.dob.age - b.dob.age;
      }
    );
    console.log("Sorting results by age");
    this.setState({
      results: sortedResults,
      displayMsg: `Showing results sorted by age`,
      query: "",
    });
  };

  handleQueryChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      query: value,
    });
  };

  render() {
    return (
      <div className="container is-max-desktop">
        <Search>
          <Filter
            handleSearch={this.handleSearch}
            query={this.state.query}
            handleQueryChange={this.handleQueryChange}
          />
          <Sort handleSort={this.handleSort} />
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
