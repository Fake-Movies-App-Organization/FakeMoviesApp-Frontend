import { SearchIcon } from "../../../icons/SearchIcon";
import { data, VideoFilm } from "../../../mocks/videoFilm";
import "./MoviesRated.css";

export const MoviesRated = () => {
  const filterMovies: VideoFilm[] = data
    .filter((item) => item.type === "movie")
    .slice(0, 10);
  //console.log(filterMovies);

  return (
    <section className="w-full py-20">
      <div className="container-section">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-2xl font-medium mt-[-2px]">Trending Movies</h2>
          <button className="flex flex-row gap-3 items-center px-4 py-3 tracking-wide rounded-lg bg-[#161A30] font-medium">
            <span>Search Movies</span>
            <SearchIcon size="1.35" />
          </button>
        </div>
        <div className="movies-rated-container mt-8">
          {filterMovies.map((movie) => {
            return (
              <article key={movie.id} className="flex flex-col gap-3.5">
                <figure className="card">
                  <div className="overflow-hidden">
                    <img src="https://i5.walmartimages.com/seo/Avengers-Infinity-War-Movie-Poster-Print-Regular-Style-Size-24-X-36_65e23347-2ccc-4581-9700-581e0ea9c3a8.a808f8889bfa9e368659fbefc5e5dda4.jpeg"></img>
                  </div>
                  <div
                    className="absolute rounded-full bottom-0 right-0
                translate-x-7 -translate-y-12 z-10"
                  >
                    <button className="relative p-7 bg-[#2F58CD] rounded-full flex items-center justify-center">
                      <span className="absolute text-[1.25rem] mt-[-5px] font-bold tracking-wider">
                        8.3
                      </span>
                    </button>
                  </div>
                </figure>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-medium">{movie.title}</h3>
                  <p className="text-base tracking-wide font-normal text-slate-50/70">
                    {movie.author}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
