import NotFound from "../components/notFound/NotFound";
import AdminLayout from "../layout/AdminLayout";
import AdminAllProjects from "../pages/admin/allProjects/AdminAllProjects";
import AdminAllReviews from "../pages/admin/allReviews/AdminAllReviews";
import AdminAllUsers from "../pages/admin/allUsers/AdminAllUsers";
import AdminAddCategory from "../pages/admin/categoryAdd/AdminAddCategory";
import AdminCreate from "../pages/admin/create/AdminCreate";
import AdminDashboard from "../pages/admin/dashboard/AdminDashboard";

export const AdminRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  errorElement: <NotFound />,
  children: [
    {
      path: "dashboard",
      element: <AdminDashboard />,
    },
    {
      path: "create",
      element: <AdminCreate />,
    },
    {
      path: "category",
      element: <AdminAddCategory />,
    },
    {
      path: "allUsers",
      element: <AdminAllUsers />,
    },
    {
      path: "allProjects",
      element: <AdminAllProjects />,
    },
    {
      path: "allReviews",
      element: <AdminAllReviews />,
    },
  ],
};
