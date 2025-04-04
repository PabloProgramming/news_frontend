import {useEffect, useState} from "react";

export const useVote = (
  initialVotes,
  id,
  patchFunction,
  storageKeyPrefix = "userVoted"
) => {
  const [votes, setVotes] = useState(initialVotes);
  const [voteChanged, setVoteChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastVote, setLastVote] = useState(null);

  const storageKey = `${storageKeyPrefix}-${id}`;

  useEffect(() => {
    setVotes(initialVotes);
    const storedVote = localStorage.getItem(storageKey);
    if (storedVote === "upvote" || storedVote === "downvote") {
      setLastVote(storedVote);
    }
  }, [initialVotes, id, storageKey]);

  const handleVote = async (type) => {
    if (type === lastVote) return;

    let voteChange = 0;

    if (type === "upvote") {
      voteChange = lastVote === "downvote" ? 1 : 1;
    } else if (type === "downvote") {
      voteChange = lastVote === "upvote" ? -1 : -1;
    }

    setVotes((curr) => curr + voteChange);
    setVoteChanged(true);
    setTimeout(() => setVoteChanged(false), 500);

    try {
      setLoading(true);
      const updated = await patchFunction(voteChange, id);
      setVotes(updated.votes);
      setLastVote(type);
      localStorage.setItem(storageKey, type);
    } catch (err) {
      setVotes((curr) => curr - voteChange); // Rollback
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {handleVote, voteChanged, votes, loading, error, lastVote};
};

