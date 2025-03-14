import { FaSearch } from "react-icons/fa";
import Movie from "@/app/components/Movie";

const API_KEY = process.env.API_KEY;

type HomeProps = {
  searchParams: {
    genre: string;
  };
};

export default async function Home({ searchParams }: HomeProps) {
  const genre = searchParams.genre || "trending"; // Default to trending
  const endpoint =
    genre === "top-rated" ? "movie/top_rated" : "trending/all/week";

  const res = await fetch(
    `https://api.themoviedb.osrg/3/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`
  );

  const data = await res.json();

  const movies = data.results;

  console.log("genre", genre);
  console.log("movies", movies);

  return (
    <div>
      <div className="my-10">
        <div className="flex gap-3">
          <input
            type="text"
            className="py-1 px-2 border border-slate-500 rounded-md outline-none bg-gray-300 w-full text-xl placeholder:text-gray-400"
            placeholder="Search Movie Title..."
          />
          <button className="bg-red-600 hover:bg-red-700 cursor-pointer px-3 py-1 text-xl rounded-md text-white">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="grid gap-5 grid-cols-12">
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <Movie />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <Movie />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <Movie />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <Movie />
        </div>
      </div>
    </div>
  );
}
