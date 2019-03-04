import React, { Component }     from "react";
import { FontAwesomeIcon }      from "@fortawesome/react-fontawesome";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import "@Styles/components/navbar";


class Navbar extends Component {

    constructor() {
        super();
        this.state = {
            toggled: false
        };
    }

    render() {
        return (
            <nav className={this.state.toggled ? "toggled" : null}>
                <FontAwesomeIcon icon="bars"/>
                <div className="sidebar">
                    <Link to="/">Home</Link>
                    <Link to="/news">News</Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;