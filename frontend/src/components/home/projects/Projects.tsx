import Categories from "../../sidebar/Categories";
import LatestAddedProjects from "../../sidebar/LatestAddedProjects";
import PopularUser from "../../sidebar/PopularUser";
import MostCommentProjects from "../../sidebar/MostCommentProjects";
import PopularProjects from "../../sidebar/PopularProjects";

import Search from "../../sidebar/Search";
import { data } from "../../../content/data";
import { useSearchParams } from "react-router-dom";
const Projects = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );
  console.log("🚀 ~ Projects ~ filteredData:", filteredData);

  return (
    <div className="h-full w-full">
      <div className="max-w-6xl mx-auto flex gap-6">
        <div className="flex-[3]">
          {filteredData.map((item) => (
            <div key={item.id}>
              <div className="mb-12">
                <img
                  src={item.image}
                  alt=""
                  className="object-cover w-full h-[400px]"
                />
                <div className="flex flex-col gap-5 items-start">
                  <span className="bg-gray-700 text-white py-2 px-4 rounded-md mt-4 ">
                    {item.createdAt}
                  </span>
                  <h1 className="text-3xl font-bold text-white font-secondary">
                    {item.title}
                  </h1>
                  <span className="flex items-center gap-3">
                    {item.name} | {item.category} | {item.reviews}
                  </span>
                  <p className="font-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
          <hr />
          <br />
        </div>
        <div className="flex-1 mb-4">
          <Search />
          <Categories />
          <PopularProjects />
          <LatestAddedProjects />
          <PopularUser />
          <MostCommentProjects />
        </div>
      </div>
    </div>
  );
};

export default Projects;
