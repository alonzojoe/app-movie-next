import { BiSolidLike } from "react-icons/bi";
const Movie = () => {
  return (
    <div className="text-white w-full rounded-md">
      <div
        className="w-full h-[12rem] rounded-md"
        style={{
          backgroundImage: `url('/movie-avatar.jpg')`,
          backgroundSize: `cover`,
          backgroundPosition: `top`,
        }}
      ></div>
      <div className="mt-3">
        <h2 className="font-bold text-lg mb-2">Titanic 1997</h2>
        <div className="flex items-center justify-between">
          <span>April 2, 1997</span>
          <div className="flex items-center gap-2">
            <BiSolidLike /> 2,111
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
