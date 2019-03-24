import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Sidebar } from "@Components/Global/Nav/Sidebar";

import "@Styles/components/navbar";


class Navbar extends Component {

    constructor() {
        super();

        this.links = { // Update this later on I guess
            home    : { to: "/", icon: "home" },
            news    : { to: "/news", icon: "rss" },
            settings: { to: "/settings", icon: "cog" }
        };

        this.state = {
            sidebarActive: false
        }
    }
    


    // Handle the state change on burger menu click
    handleBurgerClick = () => {
        this.setState(state => {
            return {
                sidebarActive: !state.sidebarActive
            }
        });
    }


    handleSidebarClick = () => {
        this.setState({
            sidebarActive: false // This will always hide the sidebar
        });
    }



    render() {
        // Build an array of all required links
        const header    = this.props.header.toLowerCase();
        const { viewport } = this.props;
        const mobile = viewport.mobile;
        const active = this.state.sidebarActive;

        const elements  = Object.keys(this.links).map((key, index) => {
            if(key === header) return; // If the key is the current page, pass

            return ( 
                <Link 
                    to={ this.links[key].to } 
                    key={ index }
                    onClick={ this.handleSidebarClick }>

                    <FontAwesomeIcon icon={this.links[key].icon} size="lg" />

                    { mobile && key }
                </Link>
            );
        });


        return (
            <nav>
                <header>{ header }</header>
                { !mobile && <div className="quick-nav">{ elements }</div> }

                { mobile && // If on mobile
                    <React.Fragment>
                        <div 
                            className={ `burger ${ active ? "active" : "" }` }
                            onClick={this.handleBurgerClick} >

                            <span className="icon"></span>
                        </div>

                        <Sidebar
                            active={ active }
                            elements={ elements }/>

                    </React.Fragment> 
                }
            </nav>
        );
    }
}


export default Navbar;