import React, { Component } from "react";

import "@Styles/pages/home";



class Home extends Component {
    render() {
        // TODO: Split into separate components!
        return (
            <div className="grid">
                <div className="news">
                    This is the news component
                </div>

                <div className="alerts">
                    Here we see very important alerts
                </div>

                <div>
                    <div className="top">
                        <header>Placeholder</header>
                        <div className="subtitle">This is some extra info</div>
                    </div>
                    <div className="bottom">
                        placeholder
                    </div>
                </div>

                <div>
                    <div className="top">
                        <header>Baro Ki'Teer</header>
                        <div className="subtitle">Last visit was 9 hours ago</div>
                    </div>
                    <div className="bottom">
                        <span className="info">20h</span>
                        <span className="detail">ETA</span>
                    </div>
                </div>

                <div>
                    <div className="top">
                        <header>Placeholder</header>
                        <div className="subtitle">This is some extra info</div>
                    </div>
                    <div className="bottom">
                        placeholder
                    </div>
                </div>

                <div>
                    <div className="top">
                        <header>Placeholder</header>
                        <div className="subtitle">This is some extra info</div>
                    </div>
                    <div className="bottom">
                        placeholder
                    </div>
                </div>

                <div>
                    <div className="top">
                        <header>Placeholder</header>
                        <div className="subtitle">This is some extra info</div>
                    </div>
                    <div className="bottom">
                        placeholder
                    </div>
                </div>

                <div>
                    <div className="top">
                        <header>Placeholder</header>
                        <div className="subtitle">This is some extra info</div>
                    </div>
                    <div className="bottom">
                        placeholder
                    </div>
                </div>
            </div>
        );
    }
}


export default Home;