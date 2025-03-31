import {useEffect, useState} from "react";
import {useParams} from "react-router";
import { getArticleById } from "../api";
import { ClipLoader } from "react-spinners";

export const Article = () => {
  const {article_id} = useParams();
  const [article, setArticle] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetArticleById = async () => {
      try {
        const articleData = await getArticleById(article_id);
          setArticle(articleData);
          setLoading(false)
      } catch (err) {
        setError(err.message);
      }
    };
    fetArticleById();
  }, [article_id]);

  if (loading)
    return (
      <div className="loader-container">
        <ClipLoader color="#646cff" size={50} />
      </div>
    );

    if (error) return <p className="error-msg">{error}</p>;

  return (
    <article className="article-container">
      <h1>{article.title}</h1>
      <p className="article-meta">
        By <strong>{article.author}</strong> |{" "}
        {new Date(article.created_at).toLocaleDateString()}
      </p>
      <img
        src={article.article_img_url}
        alt={article.title}
        className="article-image"
      />
      <p className="article-body">{article.body}</p>
      <p className="article-info">
        Topic: {article.topic} | Votes: {article.votes} | Comments:{" "}
        {article.comment_count}
      </p>
    </article>
  );
};

