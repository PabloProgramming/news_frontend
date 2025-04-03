import {ArticleCard} from "./ArticleCard";
import {ClipLoader} from "react-spinners";
import {useApiRequest} from "../hooks/useApiRequest";
import {getArticles} from "../api";
import {useParams, useSearchParams} from "react-router";
import {ErrorComponent} from "./ErrorComponent";

export const Articles = () => {
  const {slug} = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    data: articles,
    loading,
    error,
  } = useApiRequest(getArticles, slug, searchParams);

  const handleSortChange = (e) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("sort_by", e.target.value);
      return newParams;
    });
  };

  const toggleOrder = () => {
    const newOrder = searchParams.get("order") === "asc" ? "desc" : "asc";
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("order", newOrder);
      return newParams;
    });
  };

  const handleLimitChange = (e) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("limit", e.target.value);
      return newParams;
    });
  };

  if (loading)
    return (
      <div className="loader-container">
        <ClipLoader color="#646cff" size={50} />
      </div>
    );

  if (error) return <ErrorComponent message={error} />;
  return (
    <section>
      <div className="sort-controls">
        <select
          onChange={handleSortChange}
          value={searchParams.get("sort_by") || "date"}>
          <option value="created_at">Date</option>
          <option value="author">Author</option>
          <option value="votes">Votes</option>
        </select>

        <button onClick={toggleOrder}>
          {searchParams.get("order") === "asc" ? "⬆ Ascending" : "⬇ Descending"}
        </button>

        <select
          onChange={handleLimitChange}
          value={searchParams.get("limit") || 10}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
      <ul className="list">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </section>
  );
};

