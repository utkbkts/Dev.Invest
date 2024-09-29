import image from "../../assets/images/a.jpeg";

const MostCommentProjects = () => {
  return (
    <div className="mt-12">
      <h1 className="text-2xl text-white pb-4">Most Commented Projects</h1>
      <hr />
      <div className="flex items-center gap-2 pt-8">
        <img
          src={image}
          alt="image"
          className="w-24 h-24 rounded-md object-cover"
        />
        <div className="flex flex-col">
          <span className="py-1 px-2 rounded-md bg-emerald-500 text-white">
            April 1,2019
          </span>
          <span className="text-white font-bold pt-2">
            10 amazing new games
          </span>
          <div className="flex items-center gap-2 pt-4 ">
            <span className="text-gray-600 border-r pr-1 text-sm whitespace-nowrap">
              By Admin
            </span>
            <span className="text-gray-600 border-r pr-1 text-sm whitespace-nowrap">
              in Games
            </span>
            <span className="text-gray-600 text-sm whitespace-nowrap">
              in Games
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 pt-8">
        <img
          src={image}
          alt="image"
          className="w-24 h-24 rounded-md object-cover"
        />
        <div className="flex flex-col">
          <span className="py-1 px-2 rounded-md bg-emerald-500 text-white">
            April 1,2019
          </span>
          <span className="text-white font-bold pt-2">
            10 amazing new games
          </span>
          <div className="flex items-center gap-2 pt-4 ">
            <span className="text-gray-600 border-r pr-1 text-sm whitespace-nowrap">
              By Admin
            </span>
            <span className="text-gray-600 border-r pr-1 text-sm whitespace-nowrap">
              in Games
            </span>
            <span className="text-gray-600 text-sm whitespace-nowrap">
              3 comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostCommentProjects;
