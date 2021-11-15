import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import classes from "./TopHeadlines.module.scss";

const TopHeadlines = (props) => {
  const [articles, setArticles] = useState();
  const [date, setDate] = useState("");
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
        fetch(`https://saurav.tech/NewsAPI/top-headlines/category/general/${props.country}.json`)
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          setArticles(myJson.articles);
          if (articles) {
            const event = new Date(articles[0].publishedAt);
            const options = { month: "long", day: "numeric", weekday: "long" };
            const today = event.toLocaleDateString(undefined, options);
            setDate(today);
          }
        });
    },
    [articles, props.country, date]
  );

useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
}, []);


  if (!didMount) {
    return null;
  }

  return (
    <div className={classes.topHeadlines}>
      <div className={classes.topHeadlines__logo}>
        <h1>
          GENERAL <br />
          NEWS
        </h1>
        <p>{date}</p>
      </div>
      <div className={classes.topHeadlines__content}>
        <ul>
          {articles &&
            articles.map((item, index) => {
              return (
                <li key={index}>
                  <NewsCard item={item} />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default TopHeadlines;
