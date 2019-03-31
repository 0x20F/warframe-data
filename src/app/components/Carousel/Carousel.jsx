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
            indicatorEnabled: this.props.showIndicator,
            buttonsEnabled: this.props.showButtons,
            isAnimated: this.props.shouldAnimate,
            // true = to right, false = to left
            animationDirection: true,
            animationSpeed: this.props.animationSpeed ? this.props.animationSpeed : 2000
        }
    }

    componentDidMount() {
        if(!this.state.isAnimated) return;

        this.animationInterval = setInterval(() => {
            this.updatePosition(this.state.animationDirection);

        }, this.state.animationSpeed);    
    }

    componentWillUnmount() {
        clearInterval(this.animationInterval);
        clearInterval(this.progressInterval);
    }

    

    updatePosition = (next) => {
        const { children } = this.props;
        const position = this.state.currentPosition;

        const total = children.length;
        const moveTo = next ? position + 1 : position - 1;
        
        let animationDirection = 
            moveTo === total - 1 ? false :
            moveTo === 0 ? true : this.state.animationDirection;

        if(moveTo < total && moveTo >= 0) {
            this.setState({
                currentPosition: moveTo,
                animationDirection
            });
        }
    }



    render() {
        const { children, className, viewport } = this.props;
        const { currentPosition, indicatorEnabled, buttonsEnabled } = this.state;
        
        const atStart = currentPosition == 0;
        const atEnd = currentPosition == children.length - 1;
        const iconSize = viewport.mobile ? "2x" : "3x"; // This might be bad to need everywhere later
        const itemCount = children.length;



        return (
            <div className={ className }>

                <Swipe
                    allowMouseEvents={true}
                    onSwipeLeft={() => this.updatePosition(true)}
                    onSwipeRight={() => this.updatePosition(false)}>
                
                    <Wrapper>
                        <CarouselContainer 
                            position={ currentPosition }>

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
                    indicatorEnabled &&
                    <Indicator
                        radius="10"
                        stroke="2"
                        itemCount={ itemCount }
                        active={ currentPosition }/>
                }


                {
                    viewport.mobile &&
                    <p className="info">swipe or tap buttons</p>
                }


                {
                    buttonsEnabled &&
                    <React.Fragment>
                        <button 
                            className={`prev${atStart ? " hidden" : ""}`} 
                            onClick={() => this.updatePosition(false)}>

                            <FontAwesomeIcon icon="chevron-left" size={iconSize}></FontAwesomeIcon>
                        </button>

                        <button 
                            className={`next${atEnd ? " hidden" : ""}`} 
                            onClick={() => this.updatePosition(true)}>

                            <FontAwesomeIcon icon="chevron-right" size={iconSize}></FontAwesomeIcon>
                        </button>
                    </React.Fragment>
                }
            
            </div>
        );
    }
}

export default Carousel;