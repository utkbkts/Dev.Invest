import NotFound from "../components/notFound/NotFound";
import UserLayout from "../layout/UserLayout";
export const UserRoutes = {
  path: "/user",
  element: <UserLayout />,
  errorElement: <NotFound />,
  children: [{}],
};
