import React from "react";

import "@Styles/components/smallgriditem";


const SmallGridItem = (props) => {
    return (
        <div className="small-container">
            <div className="info">
                
                <div className="top">
                    <header>{ props.title }</header>
                    <div className="subtitle">{ props.subtitle }</div>
                </div>

                <div className="bottom">bottom text</div>

            </div>

            <div className="live-data">
                {/* Nothing will go here unless state I guess?*/}
            </div>
        </div>
    );
}

export default SmallGridItem;