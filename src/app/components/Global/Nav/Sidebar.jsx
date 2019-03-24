import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "@Styles/components/sidebar";


export const Sidebar = (props) => {
    
    const { elements, active } = props;

    return (
        <div className={ `sidebar${ active ? " active" : "" }` }>
            { elements }

            <a href="https://twitter.com/PlayWarframe" key="531ui" className="stickied">
                <FontAwesomeIcon icon={["fab", "twitter"]} size="lg"/>
                Twitter
            </a>
            
        </div>
    );
};
