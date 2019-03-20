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
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                    <div>Item 5</div>
                    <div>Item 6</div>
                    <div>Item 7</div>
                    <div>Item 8</div>
                </Carousel>

            </React.Fragment>
        );
    }
}


export default Home;