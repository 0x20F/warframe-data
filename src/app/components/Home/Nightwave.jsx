import React, { Component } from "react";

import "@Styles/components/home/nightwave";


class Nightwave extends Component {

    render() {

        const { data, className } = this.props;
        const challenges = data.activeChallenges.map((item, index) => {
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
                        <span className="bubble"> daily</span>
                        <span className="bubble"> weekly</span>
                        <span className="bubble"> elite</span>
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