import React, { Component } from "react";

import CarouselSlot from "@Components/Carousel/CarouselSlot";
import CarouselContainer from "@Components/Carousel/CarouselContainer";
import Wrapper from "@Components/Carousel/Wrapper";

import "@Styles/components/carousel";


class Carousel extends Component {

    constructor() {
        super();
        this.state = {
            currentPosition: 0
        }
    }

    // TODO: Use this type everywhere instead of binding in constructor
    updatePosition = () => {
        const { children } = this.props;
        const position = this.state.currentPosition;

        const total = children.length;
        const next = position + 1;

        if(next < total) {
            this.setState({
                currentPosition: position + 1
            });
        }

        console.log(position);
    }

    render() {
        const { children, className } = this.props;
        const { currentPosition } = this.state;

        return (
            <div className={ className }>

                <Wrapper>
                    <CarouselContainer position={ currentPosition }>

                        { children.map((child, index) => (
                            <CarouselSlot 
                                key={ index }
                                position={ index }>
                                { index }
                                { child }
                            </CarouselSlot>
                        )) }

                    </CarouselContainer>
                </Wrapper>

                <button onClick={this.updatePosition}>Next</button>
            </div>
        );
    }
}

export default Carousel;