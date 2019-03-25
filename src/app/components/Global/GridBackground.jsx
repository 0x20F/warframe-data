import React from "react";

import "@Styles/components/global/gridbackground";



// For the lines going out of the corners
const coords = {
    b_left  : [
        {x1: "0", y1: "100%", x2: "100%", y2: "0"},
        {x1: "0", y1: "100%", x2: "50%", y2: "0"},
        {x1: "0", y1: "100%", x2: "100%", y2: "50%"}
    ],
    b_right : [
        {x1: "100%", y1: "100%", x2: "0", y2: "0"},
        {x1: "100%", y1: "100%", x2: "0", y2: "50%"},
        {x1: "100%", y1: "100%", x2: "50%", y2: "0"}
    ],
    t_left  : [
        {x1: "0", y1: "0", x2: "100%", y2: "50%"},
        {x1: "0", y1: "0", x2: "50%", y2: "100%"}
    ],
    t_right : [
        {x1: "100%", y1: "0", x2: "0", y2: "50%"},
        {x1: "100%", y1: "0", x2: "50%", y2: "100%"}
    ]
}



const GridBackground = () => {

    const svgLines = Object.keys(coords).map((key, index) => {
        return coords[key].map((c, i) => {
            return (
                <line 
                    key={ i + index }
                    x1={ c.x1 } 
                    y1={ c.y1 } 
                    x2={ c.x2 } 
                    y2={ c.y2 }/>
            )
        });
    });


    return (
        <div className="grid-background">
            <svg>
                { svgLines }
            </svg>
        </div>
    );
}

export default GridBackground;