import image from "../../../assets/images/image1.jpg";
import { useNavigate } from "react-router-dom";

const InvestorsSidebarPart = () => {
  const navigate = useNavigate();

  return (
    <div
      className="pt-2 flex gap-2 cursor-pointer"
      onClick={() => navigate(`/investors/detail/:id`)}
    >
      <img src={image} alt="" className="rounded-full w-16  h-16" />
      <div>
        <span className="text-sm text-white">utku bektasoglu</span>
        <br />
        <span className="text-sm text-white">(5) Proje ye yatırım yaptı.</span>
      </div>
    </div>
  );
};

export default InvestorsSidebarPart;
