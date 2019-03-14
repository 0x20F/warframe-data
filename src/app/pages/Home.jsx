import React, { Component } from "react";

import SmallGridItem from "@Components/General/SmallGridItem";

import "@Styles/pages/home";



class Home extends Component {

    render() {
        const news          = this.props.news.reverse();
        const mostRecent    = news[1];
        const truncate      = (s) => {
            return (s.length > 30) ? s.substr(0, 29) + "..." : s;
        }


        return (
            <React.Fragment>

                <div className="grid">

                    {/* TODO: Move into it's own component */}
                    <a href={ mostRecent.link } className="news">
                        <div className="indicator">breaking news</div>
                        <img className="article-image" src={ mostRecent.imageLink }/>
                        <footer>
                            <header>{ truncate(mostRecent.message) }</header>
                            <span className="time">{ mostRecent.eta /* Temporary, needs formatting */}</span>
                        </footer>
                    </a>

                    <div className="alerts">
                        Here we see very important alerts
                    </div>


                
                    <SmallGridItem title="placeholder" subtitle="placeholder subtitle"/>
                  

                </div>
                
            </React.Fragment>
        );
    }
}


export default Home;