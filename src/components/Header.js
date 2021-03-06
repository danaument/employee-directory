import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Header extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div>
        <section className="hero mb-6">
          <div className="hero-body container is-max-desktop ">
            <p className="title">Employee Directory</p>
            <p className="subtitle">A React Demo App by Dan Aument</p>
          </div>
        </section>
      </div>
    );
  }
}
