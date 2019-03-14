import React, { Component } from "react";

import GridBackground from "@Components/GridBackground";
import "@Styles/pages/home";




class Home extends Component {

    render() {

        return (
            <React.Fragment>
            
                
                <div className="grid">
                    <header>
                        Grid
                    </header>
                </div>

                <GridBackground/>

            </React.Fragment>
        );
    }
}


export default Home;