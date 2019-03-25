import React, { Component } from "react";

import "@Styles/components/home/nightwave";


class Nightwave extends Component {

    constructor() {
        super();

        this.state = {
            filter: "weekly"
        };
    }

    setFilter = (filter) => {
        this.setState({
            filter: filter
        })
    };

    render() {

        const { data, className } = this.props;
        const challenges = data.activeChallenges.map((item, index) => {

            switch(this.state.filter) {
                case "daily":
                    if(!item.isDaily) return;
                    break;
                case "weekly":
                    if(item.isDaily || item.isElite) return;
                    break;
                case "elite":
                    if(!item.isElite) return;
                    break;
            }

            return (
                <div className="challenge" key={index}>
                    <div className="title">{item.title}</div>
                    <div className="description">{item.desc}</div>
                </div>
            )
        });

        return (
            <div className={`nightwave ${className}`}>
        
                <header>
                    <span className="title">Nightwave</span>
                    <span className="sort">
                        <span className="bubble" onClick={ () => this.setFilter("daily") }>daily</span>
                        <span className="bubble" onClick={ () => this.setFilter("weekly") }>weekly</span>
                        <span className="bubble" onClick={ () => this.setFilter("elite") }>elite</span>
                    </span>
                </header>

                <main>
                    <div>
                        {challenges}
                    </div>
                </main>
        
            </div>
        );
    }
}


export default Nightwave;