import React, { Component }                         from "react";
import { BrowserRouter as Router, Route, Link }     from "react-router-dom";


import Home     from "@Pages/Home";
import News     from "@Pages/News";

import Navbar   from "@Components/Nav/Navbar";

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

                    <Navbar/>

                    <Route path="/" exact component={Home} />
                    <Route path="/news" component={News} />
                    
                </React.Fragment>
            </Router>
        );
    }
}

export default AppRouter;