import React from "react";

import "@Styles/components/carousel/carousel-container";

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