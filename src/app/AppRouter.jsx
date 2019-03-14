import React, { Component }                         from "react";
import { BrowserRouter as Router, Route, Link }     from "react-router-dom";


import Home     from "@Pages/Home";
import News     from "@Pages/News";

import GridBackground from "@Components/Global/GridBackground";
import Navbar from "@Components/Global/Navbar";

// For development
import gameData from "@Temp/gameData";


class AppRouter extends Component {

    constructor() {
        super();

        this.state = {
            data: gameData
        }
        
        this.apiUrl     = "https://api.warframestat.us/pc"; // pc should be replaceable
        this.mounted    = true; // For dev server
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


    render() {
        return (
            <Router>
                <React.Fragment>

                    <GridBackground/>
                    <Navbar/>

                    <Route 
                        path="/" 
                        exact render={ () => <Home news={this.state.data.news}/> } />

                    <Route 
                        path="/news" 
                        render={ () => <News /> } />
                    
                </React.Fragment>
            </Router>
        );
    }
}

export default AppRouter;