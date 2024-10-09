import NotFound from "../components/notFound/NotFound";
import ResetPassword from "../components/resetPassword/ResetPassword";
import MainLayout from "../layout/MainLayout";
import ArgumentPage from "../pages/argumentPage/ArgumentPage";
import CategoryDetail from "../pages/categoryDetail/CategoryDetail";
import FormDetail from "../pages/formDetail/FormDetail";
import HomePage from "../pages/homePage/HomePage";
import InvestorsDetail from "../pages/investorsDetail/InvestorsDetail";
import InvestorsPage from "../pages/investorsPage/InvestorsPage";
import ProjectDetail from "../pages/projectDetail/ProjectDetail";
import ProjectsPage from "../pages/projectsPage/ProjectsPage";
import SubjectAdd from "../pages/subjectAdd/SubjectAdd";
import UserDetail from "../pages/userDetail/UserDetail";

export const MainRoutes = {
  path: "/",
  element: <MainLayout />,
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
      path: "password/reset/:token",
      element: <ResetPassword />,
    },
    {
      path: "project/detail/:id",
      element: <ProjectDetail />,
    },
    {
      path: "user/detail/:id",
      element: <UserDetail />,
    },
    {
      path: "category/detail/:id",
      element: <CategoryDetail />,
    },
    {
      path: "investors/detail/:id",
      element: <InvestorsDetail />,
    },
    {
      path: "form/detail/:id",
      element: <FormDetail />,
    },
    {
      path: "subjects/add",
      element: <SubjectAdd />,
    },
  ],
};
