export const ArticleCard = ({article}) => {
  return (
    <li>
      <img src={article.article_img_url} alt={article.title} />
      <h2>{article.title}</h2>
    </li>
  );

};