import {Link} from "react-router";

export const TopicCard = ({topic}) => {
  return (
    <li>
      <Link to={`/topics/${topic.slug}/articles`}>
        {topic.img_url && (
          <img src={topic.img_url} alt={`image of ${topic.slug}`} />
        )}
        <h2>{topic.slug}</h2>
        <p className="topic-description">{topic.description}</p>
      </Link>
    </li>
  );
};

