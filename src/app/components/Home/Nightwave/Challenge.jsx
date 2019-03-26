import React, { Component } from "react";


class Challenge extends Component {

    constructor() {
        super();

        this.state = {
            interval: null
        }
    }


    updateStateInterval = (interval) => {
        this.setState({
            interval: interval
        });
    }


    calculateTime(itemData) {
        const dateInfo = {
            d: 1E3 * 60 * 60 * 24,
            h: 1E3 * 60 * 60,
            m: 1E3 * 60,
            s: 1E3
        };

        const expiry = new Date(itemData.expiry).getTime();
        const now = new Date().getTime();
        const distance = expiry - now;

        let key = Object.keys(dateInfo).find(key => dateInfo[key] <= distance);
        
        return `${Math.floor(distance / dateInfo[key]) || "expired"}${key || ""}`;
    }


    render() {

        const { itemData } = this.props;
        const current = this.calculateTime(itemData);


        /**
             * Some titles show up in descriptions aswell
             * prevent that.
             */
        const result = itemData.desc.includes(itemData.title);

        return (
            <div className="challenge">

                <div className="title">{ itemData.title }</div>
                
                { !result && <div className="description">{ itemData.desc }</div> }
            
                <div className="challenge-info">
                    <div className="rep">{ itemData.reputation } rep</div>
                    <div className="time-left">{ current }</div>
                </div>

            </div>
        );
    }
}


export default Challenge;