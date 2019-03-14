import React, { Component } from "react";


class News extends Component {

    componentDidMount() {
        // Set navbar header
        this.props.handleHeader("News");
    }


    render() {

        return (
            <div>
                Code here
            </div>
        );
    }
}


export default News;