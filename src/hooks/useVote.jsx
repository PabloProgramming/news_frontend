import { useState } from "react";

export const useVote = (initialVotes) => {
    const [votes, setVotes] = useState(initialVotes);
    const [voteChanged, setVoteChanged] = useState(false);

    const handleVote = (type) => {
         setVotes((prevVotes) => 
            type === "upvote" ? prevVotes + 1 : prevVotes - 1
        );
        setVoteChanged(true);
        setTimeout(() => setVoteChanged(false), 500);
    };
    return {handleVote, voteChanged, votes}
}