import React, { Component } from "react";


class Challenge extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.itemData,
            time: this.calculateTime(this.props.itemData)
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.updateState(this.calculateTime(this.state.data));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    updateState = (time) => {
        this.setState({
            time: time
        });
    }


    calculateTime = (itemData) => {
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

        const { data, time } = this.state;
        const result = data.desc.includes(data.title); // If title and description are similar only add title

        return (
            <div className="challenge">

                <div className="title">{ data.title }</div>

                { !result && <div className="description">{ data.desc }</div> }

                <div className="challenge-info">
                    <div className="rep">{ data.reputation } rep</div>
                    <div className="time-left">{ time }</div>
                </div>

            </div>
        );
    }
}


export default Challenge;