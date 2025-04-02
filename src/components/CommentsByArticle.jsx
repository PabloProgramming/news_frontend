import {CommentCard} from "./CommentCard";
import {ClipLoader} from "react-spinners";
import {useApiRequest} from "../hooks/useApiRequest";
import {getCommentsByArticleId} from "../api";
import {useParams} from "react-router";
import { AddComment } from "./AddComment";
import { useState } from "react";

export const CommentsByArticle = ({setCommentCount}) => {
  const {article_id} = useParams();
  const {
    data: fetchedComments,
    loading,
    error,
  } = useApiRequest(getCommentsByArticleId, article_id);

  const [comments, setComments] = useState([]);

  const updatedComments = [...comments, ...(fetchedComments || [])];

  const addNewComment = (newComment) => {
    setComments((prev) => [newComment, ...prev]);
  };

  if (loading)
    return (
      <div className="loader-container">
        <ClipLoader color="#646cff" size={50} />
      </div>
    );

  if (error) return <p className="error-msg">{error}</p>;

  return (
    <section>
      <AddComment
        article_id={article_id}
        addNewComment={addNewComment}
        setCommentCount={setCommentCount}
      />
      {updatedComments.length === 0 ? (
        <div className="error-container">
          <h2 className="error-title">404 - No Comments Found</h2>
          <p className="error-msg">This article does not have any comments.</p>
        </div>
      ) : (
        <ul className="comments-list">
          {updatedComments.map((comment) => (
            <CommentCard key={comment.comment_id} comment={comment} />
          ))}
        </ul>
      )}
    </section>
  );
};

















