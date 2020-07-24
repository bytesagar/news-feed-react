import React from 'react';

function NewsItem(props) {
  return (
    <div className="item">
      <div className="image">
        <img src={props.image} alt="news" />
      </div>
      <div className="news-info">
        <h3>{props.title}</h3>
        <p>
          {props.body
            ? props.body.substring(0, 200)
            : 'No description available'}
        </p>
        <p className="source">Source: {props.src}</p>
        <p className="pub-date">Published at: {props.date}</p>
      </div>
    </div>
  );
}

export default NewsItem;
