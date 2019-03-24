import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "@Styles/components/sidebar";


export const Sidebar = (props) => {
    
    const header = props.header;
    const links = props.elements;
    const icons = ["home", "book-reader", "cog"]; // Should be the length of links

    const elements = Object.keys(links).map((key, index) => {
        if(header === key) return;

        return (
            <Link 
                to={ links[key] } 
                key={ index }
                onClick={ () => props.clickHandler() }> 

                <FontAwesomeIcon icon={icons[index]} size="lg"/>

                { key } 
            </Link>
        )
    });


    return (
        <div className={ `sidebar${ props.active ? " active" : "" }` }>
            { elements }

            <a href="https://twitter.com/PlayWarframe" key="531ui" className="stickied">
                <FontAwesomeIcon icon={["fab", "twitter"]} size="lg"/>
                Twitter
            </a>
            
        </div>
    );
};
