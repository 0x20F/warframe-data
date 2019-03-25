import React, { Component } from "react";

import Carousel from "@Components/Carousel/Carousel";
import Nightwave from "@Components/Home/Nightwave";

import "@Styles/pages/home";




class Home extends Component {

    componentDidMount() {
        // Update the navbar header from here
        this.props.handleHeader("Home");
    }


    render() {

        const { nightwave } = this.props.data;

        return (
            <React.Fragment>

                <Carousel
                    className="home-carousel"
                    viewport={this.props.viewport}>


                    <Nightwave 
                        className="home-component" 
                        data={ nightwave }/>



                    <div>Item 2></div>

                </Carousel>

            </React.Fragment>
        );
    }
}


export default Home;