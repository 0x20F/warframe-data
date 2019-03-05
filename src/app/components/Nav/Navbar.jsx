import React, { Component }     from "react";

import NavItem from "@Components/Nav/NavItem";
import "@Styles/components/navbar";

const Navbar = () => {
    return  (
        <div className="sidebar">
            <NavItem 
                destination="/"
                iconSize="lg"
                icon="home"/>

            <NavItem 
                destination="/news"
                iconSize="lg"
                icon="newspaper"/>

            <NavItem 
                destination="/alerts"
                iconSize="lg"
                icon="exclamation-triangle"/>
        </div>
    );
}

export default Navbar;