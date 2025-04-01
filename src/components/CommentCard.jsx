import {Link} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import {faThumbsDown} from "@fortawesome/free-solid-svg-icons";
import { useVote } from "../hooks/useVote";

export const CommentCard = ({comment}) => {
    const {votes, voteChanged, handleVote} = useVote(comment.votes)
    
  return (
    <li className="comment-card">
      <div className="comment-header">
        <h3>{comment.author}</h3>
        <span>{new Date(comment.created_at).toLocaleDateString()}</span>
      </div>
      <p className="comment-body">{comment.body}</p>
      <div className="comment-footer">
        <button onClick={() => handleVote("upvote")} className="vote-btn-up">
          <FontAwesomeIcon icon={faThumbsUp} />
        </button>
        <button
          onClick={() => handleVote("downvote")}
          className="vote-btn-down">
          <FontAwesomeIcon icon={faThumbsDown} />
        </button>
        <span className={`comment-votes ${voteChanged ? "changed" : ""}`}>
          {votes} votes
        </span>
      </div>
      {/* <Link to={`/comments/${comment.comment_id}`} className="comment-link">
        View full comment
      </Link> */}
    </li>
  );
};











