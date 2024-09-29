import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) {
      navigate(`/?search=${encodeURIComponent(search).trim()}`);
      setSearch("");
    } else {
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex items-center gap-1">
      <input
        type="text"
        name="search"
        placeholder="Category & User Search.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full py-2 px-4 rounded-md outline-none text-black"
      />
      <button
        type="submit"
        className=" bg-blue-500 text-white py-2 px-2 rounded-md"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
