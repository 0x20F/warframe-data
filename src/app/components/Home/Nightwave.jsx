import React, { Component } from "react";

import "@Styles/components/home/nightwave";


class Nightwave extends Component {

    constructor() {
        super();

        this.state = {
            filter: "none"
        };
    }

    setFilter = (filter) => {
        this.setState(state => {
            if(filter === state.filter) {
                return {
                    filter: "none"
                }
            }

            return {
                filter: filter
            }
        })
    };

    render() {

        const { data, className } = this.props;
        const { filter } = this.state;
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

            /**
             * Some titles show up in descriptions aswell
             * prevent that.
             */
            const result = item.desc.includes(item.title);

            return (
                <div className="challenge" key={index}>
                    <div className="title">{item.title}</div>
                    { !result && <div className="description">{item.desc}</div> }
                </div>
            )
        });


        return (
            <div className={`nightwave ${className}`}>
        
                <header>
                    <span className="title">Nightwave</span>
                    <span className="sort">
                        <button 
                            className={`bubble${filter === "daily" ? " active" : ""}`} 
                            onClick={ () => this.setFilter("daily") }>
                            daily
                        </button>

                        <button 
                            className={`bubble${filter === "weekly" ? " active" : ""}`}
                            onClick={ () => this.setFilter("weekly") }>
                            weekly
                        </button>
                        
                        <button 
                            className={`bubble${filter === "elite" ? " active" : ""}`}
                            onClick={ () => this.setFilter("elite") }>
                            elite
                        </button>
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