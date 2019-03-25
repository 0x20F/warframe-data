import React, { Component } from "react";

import Carousel from "@Components/Carousel/Carousel";

import "@Styles/pages/home";




class Home extends Component {

    componentDidMount() {
        // Update the navbar header from here
        this.props.handleHeader("Home");
    }


    render() {

        return (
            <React.Fragment>
            
                <Carousel 
                    className="home-carousel"
                    viewport={this.props.viewport}>

                    <div className="home-component alerts">
                        <header>
                            <span className="title">Nightwave</span>
                            <span className="sort">
                                <span className="bubble"> daily</span>
                                <span className="bubble"> weekly</span>
                                <span className="bubble"> elite</span>
                            </span>
                        </header>
                    </div>




                    <div>Item 2></div>
                    
                </Carousel>

            </React.Fragment>
        );
    }
}


export default Home;