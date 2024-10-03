import About from "./particals/About";
import Hero from "../../components/hero/Hero";
import Projects from "./particals/Projects";

const HomePage = () => {
  return (
    <div>
      <Hero
        title="Share Your Ideas, Shape the Future."
        subTitle="Instantly learn the value of your projects"
      />
      <About />
      <Projects />
    </div>
  );
};

export default HomePage;
