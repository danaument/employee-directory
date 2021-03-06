import React from "react";

export default function Filter(props) {
  return (
    <div className="column is-one-third field">
      <div className="field has-addons">
        <div className="control">
          <input
            onChange={props.handleQueryChange}
            className="input"
            type="text"
            placeholder={`e.g. "Patrick"`}
            value={props.query}
          />
        </div>
        <div className="control">
          <button
            className="button is-info"
            onClick={() => props.handleSearch(props.query)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
