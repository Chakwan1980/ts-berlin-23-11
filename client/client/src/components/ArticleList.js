import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/articles')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the articles!', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newArticle = {
      title,
      content,
    };

    axios.post('http://localhost:5000/articles', newArticle)
      .then(response => {
        setArticles([...articles, response.data]);
        setTitle('');
        setContent('');
      })
      .catch(error => {
        console.error('There was an error creating the article!', error);
      });
  };

  return (
    <div>
      <h1>Knowledge Base</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        ></textarea>
        <button type="submit">Add Article</button>
      </form>
      <div>
        {articles.map((article, index) => (
          <div key={index}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
