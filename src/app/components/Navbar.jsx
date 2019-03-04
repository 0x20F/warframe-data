import React, { Component } from "react";

import "@Styles/components/navbar";


class Navbar extends Component {

    constructor() {
        super();

        this.state = {

        };
    }

    render() {
        return (
            <nav>
                <a href="#">Home</a>
                <a href="#">News</a>
                <a href="#">Alerts</a>
            </nav>
        );
    }
}

export default Navbar;