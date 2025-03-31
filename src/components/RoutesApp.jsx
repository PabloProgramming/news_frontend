import {Routes, Route} from "react-router";
import { Articles } from "./Articles";
export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Articles />} />
    </Routes>
  );
};
