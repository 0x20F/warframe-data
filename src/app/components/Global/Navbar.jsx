import React, { Component } from "react";
import { Link } from "react-router-dom";

import "@Styles/components/navbar";


class Navbar extends Component {

    constructor() {
        super();

        this.links = {
            home: "/",
            news: "/news"
        };
    }

    render() {
        const header    = this.props.header.toLowerCase();
        const elements  = Object.keys(this.links).map((key, index) => {
            if(key === header) return; 

            return <Link to={this.links[key]} key={index}> {key} </Link>
        });

        return (
            <nav>
                <header>{ header }</header>
                {elements}
            </nav>
        );
    }
}


export default Navbar;