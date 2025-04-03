import {Routes, Route} from "react-router";
import {Articles} from "./Articles";
import {Article} from "./Article";
import {Topics} from "./Topics";
export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Articles />} />
      <Route path="/articles/:article_id" element={<Article />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="topics/:slug/articles" element={<Articles />} />
    </Routes>
  );
};

