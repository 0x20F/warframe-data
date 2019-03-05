import React                    from "react";
import { FontAwesomeIcon }      from "@fortawesome/react-fontawesome";
import { NavLink }              from "react-router-dom";


const NavItem = (props) => {
    return (
        <NavLink
            to={props.destination} 
            activeClassName="active"
            exact={true}>

            <FontAwesomeIcon 
                size={props.iconSize}
                icon={props.icon}/>
        </NavLink>
    );
}

export default NavItem;