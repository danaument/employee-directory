import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Search from "./Search"

export default class Table extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <Search />
            </div>
        )
    }
}
