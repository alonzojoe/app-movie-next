import { BiSolidLike } from "react-icons/bi";

type MovieProps = {
  movie: {
    title: string;
    poster_path: string;
    release_date: string;
    vote_count: number;
  };
};

const Movie = ({ movie }: MovieProps) => {
  const { title, poster_path, release_date, vote_count } = movie;

  const imageSrc = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}`;

  return (
    <div className="text-white w-full rounded-md">
      <div
        className="w-full h-[12rem] rounded-md"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
        }}
      ></div>
      <div className="mt-3">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <div className="flex items-center justify-between">
          <span>{release_date}</span>
          <div className="flex items-center gap-2">
            <BiSolidLike /> {vote_count}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
