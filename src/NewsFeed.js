import React, { Component } from 'react';
import './App.css';
import Article from './Article';

class NewsFeed extends Component {
    render() {
       const allArticles = this.props.newsFeedData
        return (
            <section id="main" className="container">
                {allArticles.map(item => {
                    return <Article eachArticle={item} />
                })}
            </section>
        );
    }
}

export default NewsFeed;


