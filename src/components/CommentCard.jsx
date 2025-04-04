import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp, faThumbsDown} from "@fortawesome/free-regular-svg-icons";
import {faTrashCan} from "@fortawesome/free-regular-svg-icons";
import {useVote} from "../hooks/useVote";
import {useContext, useState} from "react";
import {ClipLoader} from "react-spinners";
import {UserContext} from "../contexts/UserContex";
import {deleteCommentByCommentId, patchCommentVotesById} from "../api.js";

export const CommentCard = ({comment, deleteComment, setCommentCount}) => {
  const {user} = useContext(UserContext);

  const {votes, voteChanged, handleVote, lastVote} = useVote(
    comment.votes,
    comment.comment_id,
    patchCommentVotesById,
    "userVotedComment"
  );
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteComment = async (e) => {
    e.preventDefault();
    setIsDeleting(true);
    setError(null);
    try {
      await deleteCommentByCommentId(comment.comment_id);
      deleteComment(comment.comment_id);
      setCommentCount((prevCount) => prevCount - 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <li className="comment-card">
      <div className="comment-header">
        <h3>{comment.author}</h3>
        <span>{new Date(comment.created_at).toLocaleDateString()}</span>
      </div>
      <p className="comment-body">{comment.body}</p>
      <div className="comment-footer">
        <button
          onClick={() => handleVote("upvote")}
          className={`vote-btn-up ${lastVote === "upvote" ? "voted" : ""}`}>
          <FontAwesomeIcon icon={faThumbsUp} />
        </button>

        <button
          onClick={() => handleVote("downvote")}
          className={`vote-btn-down ${lastVote === "downvote" ? "voted" : ""}`}>
          <FontAwesomeIcon icon={faThumbsDown} />
        </button>
        {comment.author === user.username ? (
          <div className="comment-delete">
            <button onClick={handleDeleteComment} disabled={isDeleting}>
              {isDeleting ? (
                <ClipLoader color="#fff" size={20} />
              ) : (
                <FontAwesomeIcon icon={faTrashCan} />
              )}
            </button>
          </div>
        ) : (
          ""
        )}
        <span className={`comment-votes ${voteChanged ? "changed" : ""}`}>
          {votes} votes
        </span>
      </div>
      {error && <ErrorComponent message={error} />}
    </li>
  );
};





