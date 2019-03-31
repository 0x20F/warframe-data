import React, { Component } from "react";

class Ring extends Component {

    constructor(props) {
        super(props);

        const { radius, stroke } = this.props;

        this.normalizedRadius = radius - stroke * 2;
        this.circumference = this.normalizedRadius * 2 * Math.PI;
    }

    render() {

        const { radius, stroke, className } = this.props;
        const svgStyles = {
            width: radius * 2,
            height: radius * 2,
            zIndex: 5
        }

        return (
            <svg
                className="progress-ring"
                style={ svgStyles }>

                <circle
                    className={ `progress-circle ${className}` }
                    strokeWidth={ stroke }
                    strokeDasharray={ this.circumference + ' ' + this.circumference }
                    r={ this.normalizedRadius }
                    cx={ radius }
                    cy={ radius }
                />

            </svg>
        );
    }
}

export default Ring;