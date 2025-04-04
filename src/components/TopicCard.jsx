import {Link} from "react-router";

export const TopicCard = ({topic}) => {
  return (
    <li>
      <Link to={`/topics/${topic.slug}/articles`}>
        {topic.img_url ? (
          <img src={topic.img_url} alt={`image of ${topic.slug}`} />
        ) : (
          <img
            src="https://www.adexchanger.com/wp-content/uploads/2022/01/topic_feature.jpg"
            alt="topic default image"
          />
        )}
        <h2>{topic.slug}</h2>
        <p className="topic-description">{topic.description}</p>
      </Link>
    </li>
  );
};


