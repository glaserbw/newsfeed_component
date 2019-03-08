import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import NewsFeed from './NewsFeed';

const newsFeedData = [
  {
  title: 'New York is getting its very own checkout-free Amazon Go store',
  tags: "Tech",
  image: "https://i.amz.mshcdn.com/3b45dtSbBVYC4rp4K7o1WLJxs1c=/175x175/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fstory%2Fthumbnail%2F80483%2Ff5ca53a6-fc95-41e9-9a65-2d5ad5712823.jpg",
  altImage: "whatevs",
  impressions: "14",
  },
  {
  title: "9 of the best fitness trackers because there are literally too many to choose",
  tags: "Tech",
  image: "https://i.amz.mshcdn.com/15mVVAeRIrV0j6SQhwFbobUCNdI=/175x175/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fstory%2Fthumbnail%2F63304%2Fb9402968-f3b8-4cdb-a6a1-077f77bdfab7.jpeg",
  altImage: "whatevs",
  impressions: "104",
  },
  {
  title: "The most addictive Google Doodle games to waste an afternoon at work",
  tags: " Culture",
  image: "https://i.amz.mshcdn.com/vUcmKDjddK_KmnulphmEDgtPkEc=/175x175/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fstory%2Fthumbnail%2F69607%2Fd147a12b-daaa-4afb-bb13-74f6db9dffa5.png",
  altImage: "whatevs",
  impressions: "222",
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NewsFeed
            newsFeedData={newsFeedData}
        />
      </div>
    );
  }
}

export default App;

