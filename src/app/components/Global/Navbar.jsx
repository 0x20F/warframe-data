import React, { Component } from "react";
import { Link } from "react-router-dom";

import "@Styles/components/navbar";


class Navbar extends Component {

    constructor() {
        super();

        this.links = { // Update this later on I guess
            home: "/",
            news: "/news"
        };

        this.state = {
            sidebarActive: false
        }

        this.handleBurgerClick = this.handleBurgerClick.bind(this);
    }

    // Handle the state change on burger menu click
    handleBurgerClick() {
        this.setState(state => {
            return {
                sidebarActive: !state.sidebarActive
            }
        });
    }



    render() {
        // Build an array of all require links
        const header    = this.props.header.toLowerCase();
        const elements  = Object.keys(this.links).map((key, index) => {
            if(key === header) return; // If the key is the current page, pass

            return <Link to={this.links[key]} key={index}> {key} </Link>
        });

        // Have easier access to the state variable
        const active    = this.state.sidebarActive;



        return (
            <nav>
                <header>{ header }</header>
                <div className="quick-nav">{ elements }</div>

                <div 
                    className={ `burger ${ active ? "active" : "" }` }
                    onClick={this.handleBurgerClick} >

                    <span className="icon"></span>
                </div>

                <div className={ `sidebar ${ active ? "active" : "" }` }>
                    { elements }
                </div>
            </nav>
        );
    }
}


export default Navbar;