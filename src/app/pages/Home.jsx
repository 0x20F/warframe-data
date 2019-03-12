import React, { Component } from "react";

import SmallGridItem from "@Components/General/SmallGridItem";

import "@Styles/pages/home";



class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="background"></div>
                <div className="grid">
                    <div className="news">
                        This is the news component
                    </div>

                    <div className="alerts">
                        Here we see very important alerts
                    </div>


                    <SmallGridItem
                        title="placeholder"
                        subtitle="placeholder subtitle"
                        />


                </div>
            </React.Fragment>
        );
    }
}


export default Home;