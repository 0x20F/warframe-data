import React, { Component } from "react";

import "@Styles/pages/news";


class News extends Component {


    render() {
        const featuredSize  = 3; // How many items will go in the grid
        const newsData      = this.props.news;
        const elements      = newsData.reverse().slice(0, featuredSize).map((item, index) => {
            // Reversed array because the newest items are last
        });
        
        return (
            <div className="news-container">
                <div className="wrapper">
                    {elements}
                </div>
            </div>
        );
    }
}


export default News;