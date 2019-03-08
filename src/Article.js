import React, { Component } from 'react';

class Article extends Component {
    render() {
        return (
            <article className="article">
                <section className="featuredImage">
                <img src={this.props.eachArticle.image} alt={this.props.eachArticle.altImage}/>
                </section>
                <section className="articleContent">
                    <h3>{this.props.eachArticle.title}</h3>
                    <h6 className="tags">{this.props.eachArticle.tags}</h6>
                </section>
                <section className="impressions">
                    {this.props.eachArticle.impressions}
                </section>
            </article>
        );
    }
}

export default Article;