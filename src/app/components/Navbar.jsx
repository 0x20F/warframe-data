import React, { Component }     from "react";
import { FontAwesomeIcon }      from "@fortawesome/react-fontawesome";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import "@Styles/components/navbar";


class Navbar extends Component {

    constructor() {
        super();
        this.state = {
            
        };
    }


    render() {
        const iconSize = "lg";

        return (
            <nav>
                
                <div className="sidebar">
                    <Link to="/">
                        <FontAwesomeIcon 
                            size={iconSize}
                            icon="home"/>
                    </Link>
                    
                    <Link to="/news">
                        <FontAwesomeIcon 
                            size={iconSize}
                            icon="newspaper"/>
                    </Link>

                    <Link to="/alerts">
                        <FontAwesomeIcon 
                            size={iconSize}
                            icon="exclamation-triangle"/>
                    </Link>
                </div>

            </nav>
        );
    }
}

export default Navbar;