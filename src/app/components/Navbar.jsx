import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "@Styles/components/navbar";


class Navbar extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/news">News</Link>
            </nav>
        );
    }
}

export default Navbar;