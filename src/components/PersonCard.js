import React from "react";

export default function PersonCard(props) {
  const fullName = `${props.name.title} ${props.name.first} ${props.name.last}`;

  return (
      <div className={"column is-one-quarter"}>

      
    <div className={"card"}>
      <div className={"card-image"}>
        <figure className={"image is-4by3"}>
          <img src={props.picture} alt={fullName} />
        </figure>
      </div>
      <div className={"card-content"}>
        <div className={"media"}>
          <div className={"media-content"}>
            <p className={"title is-4"}>{fullName}</p>
            <p className={"subtitle is-6"}>{props.age} years old</p>
            <p className={"subtitle is-6"}>{props.state}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
