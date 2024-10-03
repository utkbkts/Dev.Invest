import { ArrowLeft, ArrowRight } from "lucide-react";
import image from "../../../assets/images/image1.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const popularData = [
  {
    id: 1,
    image: image,
    title: "Full Stack Projeler / 01 Ocak 2024",
    desc: "Proje Başlığı",
  },
  {
    id: 2,
    image: image,
    title: "Full2 Stack Projeler / 01 Ocak 2024",
    desc: "Proje2 Başlığı",
  },
  {
    id: 3,
    image: image,
    title: "Full3 Stack Projeler / 01 Ocak 2024",
    desc: "Proje3 Başlığı",
  },
  {
    id: 4,
    image: image,
    title: "Full4 Stack Projeler / 01 Ocak 2024",
    desc: "Proje4 Başlığı",
  },
];
const MostCommentProject = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 2;
  const navigate = useNavigate();
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + slidesToShow) % popularData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - slidesToShow + popularData.length) % popularData.length
    );
  };
  return (
    <div>
      <div className="relative">
        <h1 className="py-2 px-4 rounded-md bg-white text-black font-bold">
          Most Comment Projects
        </h1>
        <div className="flex items-center gap-2 absolute right-4 inset-y-0">
          <span
            className="border border-gray-500 text-black"
            onClick={prevSlide}
          >
            <ArrowLeft className="text-gray-500 cursor-pointer" />
          </span>
          <span
            className="border border-gray-500 text-black"
            onClick={nextSlide}
          >
            <ArrowRight className="text-gray-500 cursor-pointer" />
          </span>
        </div>
      </div>
      <div className="flex gap-2 pt-2 w-full">
        {popularData
          .slice(currentSlide, currentSlide + slidesToShow)
          .map((item, index) => (
            <div
              key={index}
              className="bg-white h-full w-full cursor-pointer"
              onClick={() => navigate(`/project/detail/${item.id}`)}
            >
              <img
                src={item.image}
                alt=""
                className="w-full object-cover h-[200px]"
              />
              <div className="p-4">
                <span className="font-light text-[15px] text-black font-roboto">
                  category / 12.24.2019
                </span>
                <p className="font-bold text-black font-roboto">{item.title}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MostCommentProject;
