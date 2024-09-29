import image from "../../assets/images/image1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    title: "Full Stack Projeler / 01 Ocak 2024",
    desc: "Proje Başlığı",
  },
  {
    id: 3,
    image: image,
    title: "Full Stack Projeler / 01 Ocak 2024",
    desc: "Proje Başlığı",
  },
  {
    id: 4,
    image: image,
    title: "Full Stack Projeler / 01 Ocak 2024",
    desc: "Proje Başlığı",
  },
];
const PopularSection = () => {
  return (
    <div>
      <h1 className="text-black bg-white inline-block py-2 px-4 rounded-md font-roboto font-bold">
        Popular Projects
      </h1>
      <div className="flex mt-4 gap-4">
        <div className="h-full w-full mx-auto ">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Navigation]}
            className="mySwiper"
          >
            {popularData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative p-2">
                  <img
                    src={item.image}
                    alt={`Popüler Proje `}
                    className="w-full h-[300px] object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-white text-[10px] font-bold font-poppins bg-black bg-opacity-50 p-2 rounded-md">
                      {item.title}
                    </span>
                    <span className="text-white text-sm font-bold font-poppins bg-black bg-opacity-50 p-1 rounded-md mt-1">
                      {item.desc}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
