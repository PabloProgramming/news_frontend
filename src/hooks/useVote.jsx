import {useEffect, useState} from "react";
import {patchArticleVotesById} from "../api";

export const useVote = (initialVotes, article_id) => {
  const [votes, setVotes] = useState(initialVotes);
  const [voteChanged, setVoteChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userHasVoted, setUserHasVoted] = useState(false);

  useEffect(() => {
    setVotes(initialVotes);
    const userVoteStatus = localStorage.getItem(`userVoted-${article_id}`);
  if (userVoteStatus === "true") {
    setUserHasVoted(true)
  }
  }, [initialVotes, article_id]);

 

  const handleVote = async (type) => {
    if (userHasVoted) {
      return;
    }
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
      setUserHasVoted(true);
      localStorage.setItem(`userVoted-${article_id}`, "true");
    } catch (err) {
      setVotes((currentVotes) => currentVotes - voteChange);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {handleVote, voteChanged, votes, loading, error, userHasVoted};
};





