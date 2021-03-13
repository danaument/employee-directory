import React from "react";

export default function Sort(props) {
  return (
    <div className="column is-one-quarter">
      <button className="button" onClick={() => console.log("sort button")}>
        Sort
      </button>
    </div>
  );
}
