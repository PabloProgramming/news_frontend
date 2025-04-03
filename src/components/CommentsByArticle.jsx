import {CommentCard} from "./CommentCard";
import {ClipLoader} from "react-spinners";
import {useApiRequest} from "../hooks/useApiRequest";
import {getCommentsByArticleId} from "../api";
import {useParams} from "react-router";
import {AddComment} from "./AddComment";
import {useEffect, useState} from "react";
import {ErrorComponent} from "./ErrorComponent";

export const CommentsByArticle = ({setCommentCount}) => {
  const {article_id} = useParams();
  const {
    data: fetchedComments,
    loading,
    error,
  } = useApiRequest(getCommentsByArticleId, article_id);

  const [comments, setComments] = useState([]);

    useEffect(() => {
      setComments(fetchedComments || []);
    }, [fetchedComments]);

  const addNewComment = (newComment) => {
    setComments((prev) => [newComment, ...prev]);
  };

  const deleteComment = (comment_id) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.comment_id !== comment_id)
    );
  };

  if (loading)
    return (
      <div className="loader-container">
        <ClipLoader color="#646cff" size={50} />
      </div>
    );

  if (error) return <ErrorComponent message={error}/>;

  return (
    <section>
      <AddComment
        article_id={article_id}
        addNewComment={addNewComment}
        setCommentCount={setCommentCount}
      />
      {comments.length === 0 ? (
        <ErrorComponent message="No comments found for this article." />
      ) : (
        <ul className="comments-list">
          {comments.map((comment, index) => (
            <CommentCard
              key={`${comment.comment_id}-${index}`}
              comment={comment}
              deleteComment={deleteComment}
              setCommentCount={setCommentCount}
            />
          ))}
        </ul>
      )}
    </section>
  );
};





