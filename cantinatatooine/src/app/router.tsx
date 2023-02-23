import { createBrowserRouter } from "react-router-dom";
import PersonListPage from "../pages/list/PersonListPage";
import PersonDetailPage from "../pages/detail/PersonDetailPage";
import Home from "../pages/home/Home";
import NotFound from "../pages/notfound/NotFound";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/people",
    element: <PersonListPage />,
  },
  {
    path: "/person/:id",
    element: <PersonDetailPage />,
  },
]);
