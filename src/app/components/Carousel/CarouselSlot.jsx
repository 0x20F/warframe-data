import React from "react";

import "@Styles/components/carousel/carousel-slot";

const CarouselSlot = (props) => {
    
    return (
        <div className="carousel-slot">
            { props.children }
        </div>
    );
}

export default CarouselSlot;