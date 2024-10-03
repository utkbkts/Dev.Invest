import HomePage from "../pages/homePage/HomePage";
import NotFound from "../components/notFound/NotFound";
import UserLayout from "../layout/UserLayout";
import ProjectsPage from "../pages/projectsPage/ProjectsPage";
import InvestorsPage from "../pages/investorsPage/InvestorsPage";
import ArgumentPage from "../pages/argumentPage/ArgumentPage";
import ProjectDetail from "../pages/projectDetail/ProjectDetail";
export const UserRoutes = {
  path: "/",
  element: <UserLayout />,
  errorElement: <NotFound />,
  children: [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "projects",
      element: <ProjectsPage />,
    },
    {
      path: "investors",
      element: <InvestorsPage />,
    },
    {
      path: "argument",
      element: <ArgumentPage />,
    },
    {
      path: "project/detail/:id",
      element: <ProjectDetail />,
    },
  ],
};
