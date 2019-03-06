import React, { Component } from "react";


import "@Styles/pages/news";


class News extends Component {


    render() {
        const featuredSize  = 3; // How many items will go in the grid
        const newsData      = this.props.news;
        const elements      = newsData.slice(0, featuredSize).map((item, index) => {
            if (index === 0) {
                // TODO: THE DIV NEEDS TO BE ITS OWN COMPONENT
                return <div className="most-recent" key={item.id}> {item.message} </div>;
            }

            return <div key={item.id}> {item.message} </div>
        });
        
        return (
            <div className="news-container">
                <h1>News</h1>
                <div className="wrapper">
                    {elements}
                </div>
            </div>
        );
    }
}


export default News;