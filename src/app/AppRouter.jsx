import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Home from "@Pages/Home";

import Navbar from "@Components/Navbar";


class AppRouter extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Navbar/>
                    
                    <Route path="/" component={Home}/>
                </div>
            </Router>
        );
    }
}

export default AppRouter;