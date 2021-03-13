import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Search from "./Search"
import Results from "./Results";

export default class Table extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <Search />
                <Results />
            </div>
        )
    }
}
