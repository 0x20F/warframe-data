import React, { Component } from "react";


class CarouselSlot extends Component {
    
    constructor() {
        super();
    }

    render() {
        return (
            <div className="carousel-slot">
                { this.props.children }
            </div>
        );
    }

}

export default CarouselSlot;