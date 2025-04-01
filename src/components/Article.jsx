import {useParams} from "react-router";
import {getArticleById} from "../api";
import {ClipLoader} from "react-spinners";
import {useApiRequest} from "../hooks/useApiRequest";

export const Article = () => {
  const {article_id} = useParams();

  const {
    data: article,
    loading,
    error,
  } = useApiRequest(getArticleById, article_id);

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

