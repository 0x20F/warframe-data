import React, { Component } from "react";

class Ring extends Component {

    constructor(props) {
        super(props);

        const { radius, stroke } = this.props;

        this.normalizedRadius = radius - stroke * 2;
        this.circumference = this.normalizedRadius * 2 * Math.PI;
    }

    render() {

        const { radius, stroke, progress, className } = this.props;
        const strokeDashoffset = this.circumference - progress / 100 * this.circumference;
        const svgStyles = {
            zIndex: 5
        }

        return (
            <svg
                className="progress-ring"
                height={ radius * 2 }
                width={ radius * 2 }
                style={ svgStyles }>

                <circle
                    className={ `progress-circle ${className}` }
                    strokeWidth={ stroke }
                    strokeDasharray={ this.circumference + ' ' + this.circumference }
                    style={{ strokeDashoffset }}
                    r={ this.normalizedRadius }
                    cx={ radius }
                    cy={ radius }
                />

            </svg>
        );
    }
}

export default Ring;