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
            viewport: this.prepareViewports(),
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

    prepareViewports() {
        const keys = ["mobile", "tablet", "desktop", "desktopPlus"];
        const sizes = [600, 900, 1200, 1800];
        
        let done = false;
        let result = {};

        keys.forEach((key, i) => {
            if(window.innerWidth < sizes[i] && !done) {
                result[key] = true;
                done = true;
            } else {
                result[key] = false;
            }
        });

        return result;
    }

    updateWidth = () => {
        this.setState({
            viewport: this.prepareViewports()
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
                        viewport={this.state.viewport}/>

                    <Route 
                        path="/" 
                        exact 
                        render={ 
                            () => <Home 
                                    handleHeader={this.handleHeader}
                                    viewport={this.state.viewport}/> 
                        } />

                    <Route 
                        path="/news" 
                        render={ 
                            () => <News 
                                    handleHeader={this.handleHeader}
                                    viewport={this.state.viewport}/> 
                        } />
                    
                </React.Fragment>
            </Router>
        );
    }
}

export default AppRouter;