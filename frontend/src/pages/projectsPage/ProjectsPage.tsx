import Hero from "../../components/hero/Hero";
import image from "../../assets/images/image1.jpg";
import PopularSection from "./PopularSection";
import LatestProjectSection from "./LatestProjectSection";
const ProjectsPage = () => {
  return (
    <div className="">
      <Hero
        image={image}
        title="Projects"
        subTitle="Give shape to life"
        titleMainClass="top-1/3 left-[49%] w-[500px]"
      />
      <div className="">
        <div className="container mx-auto">
          <div className="flex gap-4">
            <div className="w-full">
              <img src={image} alt="" />
            </div>
            <div className="w-1/2">
              <div className="py-2 px-4 bg-white font-poppins flex items-center justify-between text-black w-full">
                <h1 className="   font-bold text-xl">Categories</h1>
                <span>View All</span>
              </div>
              <div className="relative pt-4">
                <img
                  src={image}
                  alt=""
                  className="object-cover w-full h-[8vh] opacity-50"
                />
                <span className="text-white absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-bold font-poppins">
                  Full-Stack Developer
                </span>
              </div>
              <div className="relative pt-4">
                <img
                  src={image}
                  alt=""
                  className="object-cover w-full h-[8vh] opacity-50"
                />
                <span className="text-white absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-bold font-poppins">
                  Front End Developer
                </span>
              </div>
              <div className="relative pt-4">
                <img
                  src={image}
                  alt=""
                  className="object-cover w-full h-[8vh] opacity-50"
                />
                <span className="text-white absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-bold font-poppins">
                  Back End Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[10%] container mx-auto">
        <PopularSection />
        <LatestProjectSection />
      </div>
    </div>
  );
};

export default ProjectsPage;
