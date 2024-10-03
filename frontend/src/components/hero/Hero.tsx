/* eslint-disable @typescript-eslint/no-explicit-any */
import video from "../../assets/video/video.mp4";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

type HeroProps = {
  title: string;
  titleClass?: string;
  subTitleClass?: string;
  image?: string;
  subTitle?: string | any;
  titleMainClass?: string;
};

const Hero = ({
  title,
  image,
  titleClass,
  subTitleClass,
  subTitle,
  titleMainClass,
}: HeroProps) => {
  const pathname = useLocation().pathname;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {pathname === "/" ? (
        <video
          src={video}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        />
      ) : (
        <div className="relative">
          <img
            src={image}
            alt="image"
            className="absolute top-0 left-0 w-full h-[500px] object-cover"
          />
          <div className="bg-black/40 absolute top-0 left-0 inset-y-0 h-[500px] w-full"></div>
        </div>
      )}
      <div
        className={clsx(
          "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 p-6 rounded-lg text-center shadow-lg",
          titleMainClass
        )}
      >
        <h1
          className={clsx(
            "text-md md:text-4xl lg:text-5xl font-bold mb-4 leading-tight font-secondary whitespace-nowrap",
            titleClass
          )}
        >
          {title}
        </h1>
        <p
          className={clsx(
            "text-lg md:text-xl lg:text-2xl font-secondary",
            subTitleClass
          )}
        >
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default Hero;
