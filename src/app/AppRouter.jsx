import React, { Component }                         from "react";
import { BrowserRouter as Router, Route, Link }     from "react-router-dom";


import Home     from "@Pages/Home";
import News     from "@Pages/News";

import Navbar   from "@Components/Nav/Navbar";


class AppRouter extends Component {

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