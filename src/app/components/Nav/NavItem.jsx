import React, { Component }         from "react";
import { FontAwesomeIcon }          from "@fortawesome/react-fontawesome";
import { NavLink }                 from "react-router-dom";


class NavItem extends Component {

    render() {
        return (
            <NavLink
                to={this.props.destination} 
                activeClassName="active"
                exact="true">

                <FontAwesomeIcon 
                    size={this.props.iconSize}
                    icon={this.props.icon}/>
            </NavLink>
        );
    }
}

export default NavItem;