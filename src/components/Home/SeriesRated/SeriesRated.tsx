import { SearchIcon } from "../../../icons/SearchIcon";
import { SerieIcon } from "../../../icons/SerieIcon";
import { data, VideoFilm } from "../../../mocks/videoFilm";

export const SeriesRated = () => {

  const filterMovies: VideoFilm[] = data
    .filter((item) => item.type === "serie")
    .slice(0, 10);

  return (
    <section className="w-full pb-20">
      <div className="container-section">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-3xl mt-[-2px] font-newsreader tracking-wide">
            Trending Series
          </h2>
          <button className="flex flex-row gap-3 items-center px-4 py-3 tracking-wide rounded-lg bg-[#2B3A55] font-medium">
            <span>Search Series</span>
            <SerieIcon />
          </button>
        </div>
        <div className="series-rated-container mt-8">
          {filterMovies.map((movie) => {
            return (
              <article key={movie.id} className="flex flex-col gap-3.5">
                <figure className="card">
                  <div className="overflow-hidden">
                    <img loading="lazy" src="https://i.pinimg.com/736x/e1/a8/d9/e1a8d9cf24da3e5546ce322000267b81.jpg"></img>
                  </div>
                  <div
                    className="absolute rounded-full bottom-0 right-0
                translate-x-7 -translate-y-12 z-10 hidden sm:block"
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
