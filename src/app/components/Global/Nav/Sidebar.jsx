import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "@Styles/components/sidebar";


export const Sidebar = (props) => {

    const links = props.elements;
    const icons = ["archway", "book-reader"]; // Should be the length of links

    const elements = Object.keys(links).map((key, index) => {
        return (
            <Link to={links[key]} key={ index }> 
                <FontAwesomeIcon icon={icons[index]} />
                { key } 
            </Link>
        )
    });


    return (
        <div className={ `sidebar ${ props.active ? "active" : "" }` }>
            { elements }
        </div>
    );
};
