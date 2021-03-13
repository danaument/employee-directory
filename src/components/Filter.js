import React from 'react';

export default function Filter(props) {
    return (
        <div className="column is-one-quarter">
            <button className="button" onClick={() => console.log("filter button")}>Filter</button>
        </div>
    )
}