import React, { Component } from "react";

import Carousel from "@Components/Carousel/Carousel";

import "@Styles/pages/home";




class Home extends Component {

    componentDidMount() {
        // Update the navbar header from here
        this.props.handleHeader("Grid");
    }


    render() {

        return (
            <React.Fragment>
            
                <Carousel className="home-carousel">
                    <div>Item</div>
                    <div>Item</div>
                    <div>Item</div>
                    <div>Item</div>
                    <div>Item</div>
                    <div>Item</div>
                    <div>Item</div>
                    <div>Item</div>
                </Carousel>

            </React.Fragment>
        );
    }
}


export default Home;