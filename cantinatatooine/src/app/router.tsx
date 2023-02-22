import { createBrowserRouter } from "react-router-dom";
import PersonListPage from "../pages/list/PersonListPage";
import PersonDetailPage from "../pages/detail/PersonDetailPage";
import Home from "../pages/home/Home";

export default createBrowserRouter([
    {
      path: "/",
      element: Home(),
    },
  {
      path: "/list",
      element: PersonListPage(),
    },
    {
      path: "/:id",
      element: PersonDetailPage(),
    }
]);
