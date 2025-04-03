import {useParams} from "react-router";
import {getArticleById} from "../api";
import {ClipLoader} from "react-spinners";
import {useApiRequest} from "../hooks/useApiRequest";
import {CommentsByArticle} from "./CommentsByArticle";
import {useVote} from "../hooks/useVote";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";

export const Article = () => {
  const {article_id} = useParams();

  const {
    data: article,
    loading,
    error,
  } = useApiRequest(getArticleById, article_id);

  const [commentCount, setCommentCount] = useState(article?.comment_count);

  useEffect(() => {
    if (article) {
      setCommentCount(article.comment_count);
    }
  }, [article]);

  const {
    votes,
    voteChanged,
    handleVote,
    userHasVoted,
  } = useVote(article?.votes ?? 0, article_id);

  if (loading)
    return (
      <div className="loader-container">
        <ClipLoader color="#646cff" size={50} />
      </div>
    );

  if (error) return <p className="error-msg">{error}</p>;

  return (
    <>
      <article className="article-container">
        <h1>{article.title}</h1>
        <p className="article-topic">Topic: {article.topic}</p>
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
        <div className="artilce-footer">
          <div className="vote-button-wrapper">
            <button
              onClick={() => handleVote("upvote")}
               className={`vote-btn-up ${userHasVoted ? "voted" : ""}`}>
              <FontAwesomeIcon icon={faThumbsUp} />
            </button>
          </div>
          <span className={`article-votes ${voteChanged ? "changed" : ""}`}>
            Votes: {votes}
          </span>
          <span className="article-comments">Comments: {commentCount}</span>
        </div>
      </article>
      <CommentsByArticle
        article_id={article_id}
        setCommentCount={setCommentCount}
      />
    </>
  );
};

