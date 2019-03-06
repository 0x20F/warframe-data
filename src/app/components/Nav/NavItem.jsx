import React                    from "react";
import { FontAwesomeIcon }      from "@fortawesome/react-fontawesome";
import { NavLink }              from "react-router-dom";

import "@Styles/components/navitem";


const NavItem = (props) => {
    return (
        <NavLink
            to={props.destination} 
            className="nav-item"
            activeClassName="active"
            exact={true}>

            <FontAwesomeIcon 
                size={props.iconSize}
                icon={props.icon}/>
        </NavLink>
    );
}

export default NavItem;