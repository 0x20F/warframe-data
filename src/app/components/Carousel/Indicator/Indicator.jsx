import React, { Component } from "react";

import Ring from "@Components/Carousel/Indicator/Ring";

import "@Styles/components/carousel/indicator"

class Indicator extends Component {

    constructor() {
        super();

        this.times = (n, f) => { 
            let index = 0;
            do {
                f(index);
            } while(++index < n);
        };
    }

    render() {
        const { itemCount, active, radius, stroke, progress } = this.props;
        const elements = [];
        this.times(itemCount, (index) => {
            elements.push(
                <div 
                    className="item-indicator" 
                    key={ index }>

                    <Ring 
                        className={index === active ? "active" : ""}
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