import {ClipLoader} from "react-spinners";
import {getTopics} from "../api";
import {useApiRequest} from "../hooks/useApiRequest";
import {TopicCard} from "./TopicCard";

export const Topics = () => {
  const {data: topics, error, loading} = useApiRequest(getTopics);

  if (loading)
    return (
      <div className="loader-container">
        <ClipLoader color="#646cff" size={50} />
      </div>
    );

  if (error) return <p className="error-msg">{error}</p>;
  return (
    <ul>
      {topics.map((topic) => {
        return <TopicCard key={topic.slug} topic={topic} />;
      })}
    </ul>
  );
};

