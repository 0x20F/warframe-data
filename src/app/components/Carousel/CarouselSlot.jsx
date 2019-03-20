import React from "react";


const CarouselSlot = (props) => {
    
    return (
        <div className="carousel-slot">
            { props.children }
        </div>
    );
}

export default CarouselSlot;