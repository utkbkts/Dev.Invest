const Categories = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-col gap-4">
        <h1 className="font-roboto text-2xl leading-2 text-white">
          Categories
        </h1>
        <hr />
        <div className="flex flex-col gap-2">
          <span className="flex items-center justify-between w-full text-md cursor-pointer">
            Games
            <span className="bg-emerald-500 w-7 h-7 rounded-full text-white flex items-center justify-center">
              12
            </span>
          </span>
          <span className="flex items-center justify-between w-full text-md">
            Games
            <span className="bg-red-500 w-7 h-7 rounded-full text-white flex items-center justify-center">
              12
            </span>
          </span>
          <span className="flex items-center justify-between w-full text-md">
            Games
            <span className="bg-blue-500 w-7 h-7 rounded-full text-white flex items-center justify-center">
              12
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
