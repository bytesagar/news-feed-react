import React, { useState } from 'react';
import NewsItem from './NewsItem';

function App() {
  const [news, setNews] = useState([]);

  fetch(
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=64a1fb18a2b1438f86261e213a53547c'
  )
    .then((res) => res.json())
    .then((data) => {
      const newsData = data.articles;
      setNews(newsData);
    });

  function createNews(item, index) {
    return (
      <NewsItem
        key={index}
        src={item.source.name}
        image={item.urlToImage}
        title={item.title}
        body={item.content}
        date={new Date(item.publishedAt).toLocaleDateString()}
      />
    );
  }

  return <div className="container">{news.map(createNews)}</div>;
}

export default App;
