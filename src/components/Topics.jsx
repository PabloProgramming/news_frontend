import {ClipLoader} from "react-spinners";
import {getTopics} from "../api";
import {useApiRequest} from "../hooks/useApiRequest";
import {TopicCard} from "./TopicCard";
import {ErrorComponent} from "./ErrorComponent";

export const Topics = () => {
  const {data: topics, error, loading} = useApiRequest(getTopics);

  if (loading)
    return (
      <div className="loader-container">
        <ClipLoader color="#646cff" size={50} />
      </div>
    );

  if (error) return <ErrorComponent message={error}/>;
  return (
    <ul>
      {topics.map((topic) => {
        return <TopicCard key={topic.slug} topic={topic} />;
      })}
    </ul>
  );
};

