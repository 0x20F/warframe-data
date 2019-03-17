import React, { Component } from "react";

import "@Dev/devinfostyles";


class DevInfo extends Component {
    
    constructor() {
        super();
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth,
            hidden: false
        };
        this.sizes = {
            phone: 600,
            tablet: 900,
            desktop: 1200,
            desktopPlus: 1800
        }
        this.update = this.update.bind(this);
        this.hideElement = this.hideElement.bind(this);
        this.currentViewport = this.currentViewport.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.update);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.update);
    }

    // Update the state width and height
    update() {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth
        });
    }

    // Update whether or not element should be hidden
    hideElement() {
        this.setState(state => {
            return {
                hidden: !state.hidden
            }
        });
    }

    // Set the color based on width
    currentViewport() {
        const colors = {phone: "#2d7dd2", tablet: "#97cc04", desktop: "#f8333c", desktopPlus: "#000"};
        const keys = Object.keys(this.sizes);
        
        for(const key of keys) {
            if(this.state.width < this.sizes[key]) {
                return {
                    color: colors[key],
                    viewport: key
                };
            } 
            // To make sure that nothing breaks after 1800px
            else if(this.state.width >= this.sizes.desktopPlus) {
                return {
                    color: colors.desktopPlus,
                    viewport: "desktopPlus"
                };
            }
        }

    }


    render() {
        const hidden = this.state.hidden;
        const viewport = this.currentViewport();
        const style = {
            color: viewport.color
        };

        return (
            <div 
                className={ `device-info ${hidden ? "hidden" : ""}` } 
                onClick={this.hideElement} >

                <span>{viewport.viewport}</span>
                <span style={style}>{this.state.width}px</span>
                <span>{this.state.height}px</span>
            </div>
        );
    }
}


export default DevInfo;