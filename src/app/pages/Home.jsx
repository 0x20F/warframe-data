import React, { Component } from "react";

import Carousel from "@Components/Carousel/Carousel";
import Nightwave from "@Components/Home/Nightwave/Nightwave";
import QuickInfo from "@Components/Home/QuickInfo/QuickInfo";

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
                    viewport={ this.props.viewport }
                    showButtons={ true }>


                    <Nightwave 
                        className="home-component shadow no-overflow" 
                        data={ nightwave }/>

                    <QuickInfo
                        className="home-component"
                        viewport={ this.props.viewport } />



                </Carousel>

            </React.Fragment>
        );
    }
}


export default Home;