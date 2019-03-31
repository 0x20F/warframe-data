import React, { Component } from "react";

import Carousel from "@Components/Carousel/Carousel";


import "@Styles/components/home/quickinfo";

class QuickInfo extends Component {

    constructor() {
        super();
    }


    render() {
        const { className } = this.props;

        return (
            <div className={ `quick-info ${className}` }>

                <div className="cycles shadow">

                    

                </div>

            </div>
        );
    }
}

export default QuickInfo;