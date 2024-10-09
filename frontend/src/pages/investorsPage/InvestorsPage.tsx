import Hero from "../../components/hero/Hero";
import investors from "../../assets/images/investors.jpg";
import Form from "./particals/Form";
import Sidebar from "./particals/Sidebar";
import { Link } from "react-router-dom";
const InvestorsPage = () => {
  return (
    <div className="mt-[70px]">
      <Hero
        image={investors}
        title="Investors"
        subTitle={
          <>
            Be fearful when others are greedy, and be greedy when others are
            fearful.
            <br />
            <span className="block mt-2">- Warren Buffett</span>
          </>
        }
        titleMainClass="top-1/4 left-[49%]"
      />
      <div className="container mx-auto">
        <div className="mb-2">
          <Link to={"/subjects/add"}>
            <button className="text-black bg-white p-2 rounded-md cursor-pointer">
              +Konu Ekle
            </button>
          </Link>
        </div>
        <div className="flex w-full gap-4">
          <div className="w-full">
            <Form />
          </div>
          <div className="w-1/5">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorsPage;
