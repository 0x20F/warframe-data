import React from "react";

import "@Styles/components/carousel/carousel-container";

const CarouselContainer = (props) => {

    // TODO: Translate this by the width of the child element
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