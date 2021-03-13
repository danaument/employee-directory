import React from "react";
import Filter from "./Filter";
import Sort from "./Sort";

export default function Search(props) {
  return (
    <div className="columns container px-6">
      <Filter />
      <Sort />
    </div>
  );
}
