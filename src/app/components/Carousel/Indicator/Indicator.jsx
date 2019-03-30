import React, { Component } from "react";

import Ring from "@Components/Carousel/Indicator/Ring";

import "@Styles/components/carousel/indicator"

class Indicator extends Component {

    constructor() {
        super();

        this.times = (n, f) => { while(n --> 0) f(n); };
    }

    render() {
        const { itemCount, radius, stroke, progress } = this.props;
        const elements = [];
        this.times(itemCount, (index) => {
            elements.push(
                <div 
                    className="item-indicator" 
                    key={ index }>

                    <Ring 
                        radius={ radius }
                        stroke={ stroke }
                        progress={ progress }/>
                </div>
            );
        });

        return (
            <div className="indicator">
                { elements }
            </div>
        );
    }
}

export default Indicator;