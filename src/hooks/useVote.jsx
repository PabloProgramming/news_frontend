import {useEffect, useState} from "react";
import {patchArticleVotesById} from "../api";

export const useVote = (initialVotes, article_id) => {
  const [votes, setVotes] = useState(initialVotes);
  const [voteChanged, setVoteChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setVotes(initialVotes);
  }, [initialVotes, article_id]);

  const handleVote = async (type) => {
    setLoading(true);
    setError(null);

    const voteChange = type === "upvote" ? 1 : -1;
    setVotes((currentVotes) => currentVotes + voteChange);
    setVoteChanged(true);
    setTimeout(() => setVoteChanged(false), 500);

    try {
      const updatedArticle = await patchArticleVotesById(
        voteChange,
        article_id
      );
      setVotes(updatedArticle.votes);
    } catch (err) {
      setVotes((currentVotes) => currentVotes - voteChange);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {handleVote, voteChanged, votes, loading, error};
};

