import { useMatch, useResolvedPath } from "react-router-dom";

export const useActivePath = (path, end = true) =>
  useMatch({ path: useResolvedPath(path).pathname, end }) === null
    ? ""
    : "active";
