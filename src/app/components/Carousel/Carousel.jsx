import React, { Component } from "react";
import Swipe from "react-easy-swipe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CarouselSlot from "@Components/Carousel/CarouselSlot";
import CarouselContainer from "@Components/Carousel/CarouselContainer";
import Wrapper from "@Components/Carousel/Wrapper";

import "@Styles/components/carousel/carousel";


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
    }

    render() {
        const { children, className, onMobile } = this.props;
        const { currentPosition } = this.state;
        
        const atStart = currentPosition == 0;
        const atEnd = currentPosition == children.length - 1;
        const iconSize = onMobile ? "2x" : "3x";

        return (
            <div className={ className }>

                <Swipe
                    allowMouseEvents={true}
                    onSwipeLeft={() => this.updatePosition(true)}
                    onSwipeRight={() => this.updatePosition(false)}>
                
                    <Wrapper>
                        <CarouselContainer position={ currentPosition }>

                            { children.map((child, index) => (
                                <CarouselSlot 
                                    key={ index }>
                                    { child }
                                </CarouselSlot>
                            )) }

                        </CarouselContainer>
                    </Wrapper>

                </Swipe>


                <button 
                    className={`prev${atStart ? " hidden" : ""}`} 
                    onClick={() => this.updatePosition(false)}>

                    <FontAwesomeIcon icon="chevron-left" size={iconSize}></FontAwesomeIcon>
                </button>

                {
                    onMobile &&
                    <p className="info">swipe or tap buttons</p>
                }

                <button 
                    className={`next${atEnd ? " hidden" : ""}`} 
                    onClick={() => this.updatePosition(true)}>

                    <FontAwesomeIcon icon="chevron-right" size={iconSize}></FontAwesomeIcon>
                </button>
            
            </div>
        );
    }
}

export default Carousel;