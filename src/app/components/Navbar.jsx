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

        this.toggleSidebar = this.toggleSidebar.bind(this);
    }


    toggleSidebar() {
        this.setState(state => {
            return {
                toggled: !state.toggled
            };
        });
    }


    render() {
        const isToggled     = this.state.toggled ? "toggled" : "";
        const toggledIcon   = this.state.toggled ? "times" : "bars";

        return (
            <nav className={isToggled}>

                <FontAwesomeIcon 
                    icon={toggledIcon} 
                    size="lg"
                    onClick={this.toggleSidebar}/>
                
                <div className="sidebar">
                    <Link to="/">Home</Link>
                    <Link to="/news">News</Link>
                </div>

            </nav>
        );
    }
}

export default Navbar;