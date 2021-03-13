import React from 'react';
import PersonCard from './PersonCard';

function Results(props) {
    return (
        <div className="container">
            <PersonCard />
            <p>p tag from results</p>
        </div>
    )
}

export default Results;