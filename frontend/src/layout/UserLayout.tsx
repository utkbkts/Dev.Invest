import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Header />
      </div>
      <div className="grow">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;
