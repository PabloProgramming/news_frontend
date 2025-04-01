import {CommentCard} from "./CommentCard";
import {ClipLoader} from "react-spinners";
import {useApiRequest} from "../hooks/useApiRequest";
import {getCommentsByArticleId} from "../api";
import {useParams} from "react-router";

export const CommentsByArticle = () => {
  const {article_id} = useParams();
  const {
    data: comments,
    loading,
    error,
  } = useApiRequest(getCommentsByArticleId, article_id);

  if (loading)
    return (
      <div className="loader-container">
        <ClipLoader color="#646cff" size={50} />
      </div>
    );

  if (error) return <p className="error-msg">{error}</p>;
  return (
    <section>
      <ul className="comments-list">
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </section>
  );
};

