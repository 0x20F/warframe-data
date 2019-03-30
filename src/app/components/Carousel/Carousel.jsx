import React, { Component } from "react";
import Swipe from "react-easy-swipe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CarouselSlot from "@Components/Carousel/CarouselSlot";
import CarouselContainer from "@Components/Carousel/CarouselContainer";
import Wrapper from "@Components/Carousel/Wrapper";
import Indicator from "@Components/Carousel/Indicator/Indicator";

import "@Styles/components/carousel/carousel";


class Carousel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPosition: 0,
            showIndicator: this.props.showIndicator
        }
    }



    updatePosition = (next) => {
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
        const { children, className, viewport } = this.props;
        const { currentPosition, showIndicator } = this.state;
        
        const atStart = currentPosition == 0;
        const atEnd = currentPosition == children.length - 1;
        const iconSize = viewport.mobile ? "2x" : "3x";
        const itemCount = children.length;

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

                {
                    showIndicator &&
                    <Indicator
                        radius="20"
                        stroke="4"
                        progress="50"
                        itemCount={ itemCount }
                        active={ currentPosition }/>
                }

                <button 
                    className={`prev${atStart ? " hidden" : ""}`} 
                    onClick={() => this.updatePosition(false)}>

                    <FontAwesomeIcon icon="chevron-left" size={iconSize}></FontAwesomeIcon>
                </button>

                {
                    viewport.mobile &&
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