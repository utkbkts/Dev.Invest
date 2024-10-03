import { ArrowLeft, ArrowRight } from "lucide-react";
import image from "../../../assets/images/image1.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const popularData = [
  {
    id: 1,
    image: image,
    title: "utku bektasoglu / 4 proje paylaştı",
    desc: "Proje Başlığı",
  },
  {
    id: 2,
    image: image,
    title: "utku bektasoglu / 4 proje paylaştı",
    desc: "Proje2 Başlığı",
  },
  {
    id: 3,
    image: image,
    title: "utku bektasoglu / 4 proje paylaştı",
    desc: "Proje3 Başlığı",
  },
  {
    id: 4,
    image: image,
    title: "utku bektasoglu / 4 proje paylaştı",
    desc: "Proje4 Başlığı",
  },
];

const PopularUser = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 4;
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
    <div className="flex gap-4">
      <div className="w-full">
        <div className="relative">
          <h1 className="py-2 px-4 rounded-md bg-white text-black font-bold">
            Popular User
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
        <div className="flex gap-2 pt-2 w-full items-center justify-between">
          {popularData
            .slice(currentSlide, currentSlide + slidesToShow)
            .map((item, index) => (
              <div
                key={index}
                className="h-full w-[200px] cursor-pointer"
                onClick={() => navigate(`/project/detail/${item.id}`)}
              >
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={item.image}
                    alt=""
                    className="object-cover h-[150px] rounded-full w-[150px]"
                  />
                  <h1 className="whitespace-nowrap">{item.title}</h1>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PopularUser;
