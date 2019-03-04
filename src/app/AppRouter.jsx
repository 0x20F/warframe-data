import React, { Component }                         from "react";
import { BrowserRouter as Router, Route, Link }     from "react-router-dom";


import Home     from "@Pages/Home";
import News     from "@Pages/News";

import Navbar   from "@Components/Navbar";


class AppRouter extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Navbar/>

                    <Route path="/" exact component={Home} />
                    <Route path="/news" component={News} />
                </div>
            </Router>
        );
    }
}

export default AppRouter;