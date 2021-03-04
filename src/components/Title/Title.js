import React, { useEffect, useState } from "react";
import News from "../News/News";

const Title = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      "http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=534bea72053649498aa31a369ab63f75"
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
      });
  }, [])
  return (
    <div className='container'>
      <h1>Total Headlines:{articles.length}</h1>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
};

export default Title;
