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
        const { itemCount, active, radius, stroke } = this.props;
        const elements = [];
        this.times(itemCount, (index) => {
            elements.push(
                <div 
                    className="item-indicator" 
                    key={ index }>

                    { /** TODO: This should be clickable */}
                    <Ring 
                        className={index === active ? "active" : ""}
                        radius={ radius }
                        stroke={ stroke }/>
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