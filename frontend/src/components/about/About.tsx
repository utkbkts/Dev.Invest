/* eslint-disable react/no-unescaped-entities */
import invest from "../../assets/images/dev.invest.png";

const About = () => {
  return (
    <div className="h-screen w-full  flex items-center">
      <div className="flex gap-8 justify-center items-center container mx-auto px-6 py-12">
        <div className="flex-1 flex items-center justify-center">
          <img
            src={invest}
            alt="invest"
            className="rounded-lg shadow-lg w-full max-w-sm"
          />
        </div>
        {/* Text Section */}
        <div className="flex-1  p-8 rounded-lg shadow-md">
          <h2 className="text-4xl font-bold text-gray-200 mb-6 border-b-4 border-blue-500 inline-block">
            Who are we?
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            {" "}
            The world of software is rapidly evolving; many developers showcase
            their skills by sharing projects on platforms like GitHub. However,
            when they step into freelance job platforms, things aren't as easy
            as they hoped. Clients often look for lower-cost solutions, causing
            the hard work of truly talented developers to go unnoticed.{" "}
          </p>{" "}
          <p className="text-lg text-gray-200 leading-relaxed">
            {" "}
            Imagine a platform in the digital world where you can share your
            projects, receive support, and develop your skills! This is a space
            filled with opportunities that will shape your future. Here, you can
            bring your creative ideas to life while also expanding your
            professional network.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
