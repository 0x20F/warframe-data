import React from "react";


const MiniGridItem = (props) => {
    return (
        <div>
            <div className="top">
                <header>{ props.title }</header>
                <div className="subtitle">{ props.subtitle }</div>
            </div>
            <div className="bottom">
                placeholder
            </div>
        </div>
    );
}

export default MiniGridItem;