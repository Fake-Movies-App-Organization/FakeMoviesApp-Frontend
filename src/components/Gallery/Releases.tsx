import { useState } from "react";
import { data } from "../../mocks/videoFilm";
import { MovieReleases } from "./MovieReleases";
import { SerieReleases } from "./SerieReleases";

export const Releases = () => {
  const filterMovies = data.filter((item) => item.type === "movie").slice(0, 5);
  const filterSeries = data.filter((item) => item.type === "serie").slice(0, 5);

  const [selectedOption, setSelectedOptions] = useState("movies");

  const handleOptionClicked = (option: string) => {
    console.log(option);
    setSelectedOptions(option);
  };

  return (
    <div className="min-w-[300px] hidden md:block">
      <h1 className="text-2xl tracking-wide text-slate-50/90 font-medium">
        Last Releases
      </h1>
      <div className="flex flex-row w-full mt-4">
        <div
          className={`movies-option cursor-pointer flex items-center justify-center flex-1 py-3 border-b-[3px] ${
            selectedOption === "movies"
              ? "border-[#edb709] text-[#edb709]/90"
              : "border-transparent text-slate-400 hover:text-slate-50/90"
          }`}
          onClick={() => handleOptionClicked("movies")}
        >
          <span>Movies</span>
        </div>
        <div
          className={`movies-option cursor-pointer flex items-center justify-center flex-1 py-3 border-b-[3px] ${
            selectedOption === "series"
              ? "border-[#edb709] text-[#edb709]/90"
              : "border-transparent text-slate-400 hover:text-slate-50/90"
          }`}
          onClick={() => handleOptionClicked("series")}
        >
          <span>Series</span>
        </div>
      </div>
      <div className="releases-container mt-5">
        {selectedOption === "movies" ? (
          <MovieReleases movies={filterMovies} />
        ) : (
          <SerieReleases series={filterSeries} />
        )}
      </div>
    </div>
  );
};
