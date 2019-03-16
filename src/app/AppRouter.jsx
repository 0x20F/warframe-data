import React, { Component }                         from "react";
import { BrowserRouter as Router, Route, Link }     from "react-router-dom";


import Home     from "@Pages/Home";
import News     from "@Pages/News";

import GridBackground from "@Components/Global/GridBackground";
import Navbar from "@Components/Global/Navbar";

// For development
import gameData from "@Dev/gameData";
import DevInfo from "@Dev/DevInfo";


class AppRouter extends Component {

    constructor() {
        super();

        this.state = {
            data: gameData,
            navHeader: "Grid"
        }
        
        this.apiUrl         = "https://api.warframestat.us/pc"; // pc should be replaceable
        this.mounted        = true; // For dev server
        this.handleHeader   = this.handleHeader.bind(this);
    }


    componentDidMount() {
        // fetch(this.apiUrl)
        //     .then(response => response.json())
        //     .then(response => {
        //         if(!this.mounted) return;
                
        //         this.setState({
        //             gameData: response
        //         })
        //     });
    }


    componentWillUnmount() {
        // this.mounted = false;
    }


    handleHeader(newHeader) {
        this.setState({
            navHeader: newHeader
        });
    }


    render() {
        return (
            <Router>
                <React.Fragment>

                    <DevInfo/>


                    <GridBackground />
                    <Navbar header={this.state.navHeader} handleHeader={this.handleHeader}/>

                    <Route 
                        path="/" 
                        exact 
                        render={ () => <Home handleHeader={this.handleHeader}/> } />

                    <Route 
                        path="/news" 
                        render={ () => <News handleHeader={this.handleHeader}/> } />
                    
                </React.Fragment>
            </Router>
        );
    }
}

export default AppRouter;