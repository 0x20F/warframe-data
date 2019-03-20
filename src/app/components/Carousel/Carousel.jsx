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
    updatePosition = (next) => {
        // next is boolean... use typescript? 
        // true go next false go prev

        const { children } = this.props;
        const position = this.state.currentPosition;

        const total = children.length;
        const moveTo = next ? position + 1 : position - 1;

        if(moveTo < total && moveTo >= 0) {
            this.setState({
                currentPosition: moveTo
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

                <button onClick={() => this.updatePosition(false)}>Prev</button>
                <button onClick={() => this.updatePosition(true)}>Next</button>
            </div>
        );
    }
}

export default Carousel;