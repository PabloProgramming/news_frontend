import { useState } from "react";

export const useVote = (initialVotes) => {
    const [votes, setVotes] = useState(initialVotes);
    const [voteChanged, setVoteChanged] = useState(false);

    const handleVote = (type) => {
        let newVotes = votes;
        if (type === "upvote") setVotes(votes + 1);
        if (type === "downvote") setVotes(votes - 1);
        setVotes(newVotes)
        setVoteChanged(true);
        setTimeout(() => setVoteChanged(false), 500);
    };
    return {handleVote, voteChanged, votes}
}