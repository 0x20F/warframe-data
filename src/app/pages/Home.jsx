import React, { Component } from "react";

import "@Styles/pages/home";




class Home extends Component {

    componentDidMount() {
        // Update the navbar header from here
        this.props.handleHeader("Grid");
    }


    render() {

        return (
            <React.Fragment>
            


            </React.Fragment>
        );
    }
}


export default Home;