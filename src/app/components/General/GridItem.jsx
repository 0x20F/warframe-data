import React from "react";

import "@Styles/components/griditem";

const GridItem = (props) => {

    return (
        <div className={`grid-item ${props.className}`}>
            <div className="thumb">
                <img src={props.data.imageLink}/>
            </div>

            <a href={props.data.link} className="title">
                {props.data.message}
            </a>
        </div>
    );
}

export default GridItem;