import {useEffect, useState} from "react";
import {ArticleCard} from "./ArticleCard";
import {getArticles} from "../api";
import {ClipLoader} from "react-spinners";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesData = await getArticles();
        setArticles(articlesData);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
    };

    fetchArticles();
  }, []);

  if (loading)
    return (
      <div className="loader-container">
        <ClipLoader color="#646cff" size={50} />
      </div>
    );

  if (error) return <p className="error-msg">{error}</p>;
  return (
    <section>
      <ul className="list">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </section>
  );
};

