import React from "react";

function Results(props) {
  return (
    <div>
      <h3 className="p-2">{props.displayMsg}</h3>
      <div className="columns is-multiline px-6">{props.children}</div>
    </div>
  );
}

export default Results;
