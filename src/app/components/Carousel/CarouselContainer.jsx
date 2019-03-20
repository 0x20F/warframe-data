import React from "react";


const CarouselContainer = (props) => {

    const style = {
        transform: `translateX(calc(var(--slot-basis-n) * ${props.position}))`
    }

    return (
        <div className="carousel-container" style={style}>
            { props.children }
        </div>
    );
};

export default CarouselContainer;