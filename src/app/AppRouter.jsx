import React, { Component }                         from "react";
import { BrowserRouter as Router, Route, Link }     from "react-router-dom";


import Home     from "@Pages/Home";
import News     from "@Pages/News";

import GridBackground from "@Components/Global/GridBackground";
import Navbar from "@Components/Global/Nav/Navbar";

// For development
import gameData from "@Dev/gameData";
import DevInfo from "@Dev/DevInfo";



class AppRouter extends Component {

    constructor() {
        super();

        this.state = {
            data: gameData,
            // TODO: Switch this with a viewport dict for more options
            onMobile: window.innerWidth < 600, // TODO: a centralized place for all variables?
            navHeader: "Grid"
        }
        
        this.apiUrl         = "https://api.warframestat.us/pc"; // pc should be replaceable
        this.mounted        = true; // For dev server
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
        window.addEventListener("resize", this.updateWidth);
    }


    componentWillUnmount() {
        // this.mounted = false;
        window.removeEventListener("resize", this.updateWidth);
    }

    updateWidth = () => {
        this.setState({
            onMobile: window.innerWidth < 600
        })
    }

    handleHeader = (newHeader) => {
        this.setState({
            navHeader: newHeader
        });
    }

    // TODO: You need context or something to pass themes and settings around

    render() {
        return (
            <Router>
                <React.Fragment>

                    <DevInfo/>
                    <GridBackground />
                    <Navbar 
                        header={this.state.navHeader} 
                        handleHeader={this.handleHeader}
                        onMobile={this.state.onMobile}/>

                    <Route 
                        path="/" 
                        exact 
                        render={ 
                            () => <Home 
                                    handleHeader={this.handleHeader}
                                    onMobile={this.state.onMobile}/> 
                        } />

                    <Route 
                        path="/news" 
                        render={ 
                            () => <News 
                                    handleHeader={this.handleHeader}
                                    onMobile={this.state.onMobile}/> 
                        } />
                    
                </React.Fragment>
            </Router>
        );
    }
}

export default AppRouter;