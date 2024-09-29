import About from "../../components/about/About";
import Hero from "../../components/hero/Hero";
import Projects from "../../components/home/projects/Projects";

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
