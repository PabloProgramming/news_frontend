import {Routes, Route} from "react-router";
import { Articles } from "./Articles";
import { Article } from "./Article";
export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Articles />} />
      <Route path="/articles/:article_id" element={<Article/>} />
    </Routes>
  );
};
