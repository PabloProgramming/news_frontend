import {useContext, useState} from "react";
import {postCommentByArticleId} from "../api";
import {ClipLoader} from "react-spinners";
import {UserContext} from "../contexts/UserContex";

export const AddComment = ({article_id, addNewComment, setCommentCount}) => {
  const {user} = useContext(UserContext);

  const [newComment, setNewComment] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState(null);

  const handlePostComment = async (e) => {
    e.preventDefault();
    setIsPosting(true);
    setError(null);

    try {
      const newPostedComment = await postCommentByArticleId(
        article_id,
        user.username,
        newComment
      );

      addNewComment(newPostedComment);
      setCommentCount((prevCount) => prevCount + 1);

      setNewComment("");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsPosting(false);
    }
  };

  if (error) return <p className="error-msg">{error}</p>;

  return (
    <section className="comment-card comment-form">
      <div className="comment-header">
        <h3>Add a Comment</h3>
      </div>
      <div className="comment-body">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment..."
          className="comment-textarea"
        />
      </div>
      <div className="comment-footer">
        <button
          onClick={handlePostComment}
          disabled={isPosting}
          className="comment-btn">
          {isPosting ? <ClipLoader color="#fff" size={20} /> : "Post Comment"}
        </button>
      </div>
      {error && <p className="error-msg">{error}</p>}
    </section>
  );
};

