import {ArticleCard} from "./ArticleCard";
import {ClipLoader} from "react-spinners";
import {useApiRequest} from "../hooks/useApiRequest";
import {getArticles} from "../api";
import {useParams} from "react-router";

export const Articles = () => {
  const {slug} = useParams();
  const {data: articles, loading, error} = useApiRequest(getArticles, slug);

  if (loading)
    return (
      <div className="loader-container">
        <ClipLoader color="#646cff" size={50} />
      </div>
    );

  if (error) return <p className="error-msg">{error}</p>;
  return (
    <section>
      <ul className="list">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </section>
  );
};

