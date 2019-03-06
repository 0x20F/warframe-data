import React, { Component } from "react";

import GridItem from "@Components/General/GridItem";
import "@Styles/pages/news";


class News extends Component {


    render() {
        const featuredSize  = 3; // How many items will go in the grid
        const newsData      = this.props.news;
        const elements      = newsData.reverse().slice(0, featuredSize).map((item, index) => {
            let cName = "";

            if (index === 0) {
                cName = "most-recent";
            }

            return (
                <GridItem 
                    className={cName} 
                    key={item.id} 
                    data={item}/>
            );
        });
        
        return (
            <div className="news-container">
                <header>News</header>
                <div className="wrapper">
                    {elements}
                </div>
            </div>
        );
    }
}


export default News;