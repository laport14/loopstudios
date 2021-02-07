import React from 'react';
import './Article.css'

function Article(props) {
  return (
    <div className='article-container'>
      <div className='title-article'>OUR CREATIONS</div>
      <div className='article-button'>
        <button>SEE ALL</button>
      </div>
    </div>
  );
}

export default Article;