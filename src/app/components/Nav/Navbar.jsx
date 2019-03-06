import React    from "react";

import NavItem  from "@Components/Nav/NavItem";
import "@Styles/components/navbar";

const Navbar = () => {
    return  (
        <div className="sidebar">
            <NavItem 
                destination="/"
                iconSize="lg"
                icon="home"
                text="home"/>

            <NavItem 
                destination="/news"
                iconSize="lg"
                icon="newspaper"
                text="news"/>

            <NavItem 
                destination="/alerts"
                iconSize="lg"
                icon="exclamation-triangle"
                text="alerts"/>
        </div>
    );
}

export default Navbar;