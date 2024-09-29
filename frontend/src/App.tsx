import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import NotFound from "./components/notFound/NotFound";
import React from "react";
import { Toaster } from "react-hot-toast";
import UserLayout from "./layout/UserLayout";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import InvestorsPage from "./pages/investorsPage/InvestorsPage";
import ArgumentPage from "./pages/argumentPage/ArgumentPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/projects",
          element: <ProjectsPage />,
        },
        {
          path: "/investors",
          element: <InvestorsPage />,
        },
        {
          path: "/argument",
          element: <ArgumentPage />,
        },
      ],
    },
  ]);
  return (
    <React.Fragment>
      <Toaster position="top-center" />
      <div>
        <RouterProvider router={router} />
      </div>
    </React.Fragment>
  );
};

export default App;
