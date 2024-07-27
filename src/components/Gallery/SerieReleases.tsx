import { VideoFilm } from "../../mocks/videoFilm";

interface SerieReleasesProps {
  series: VideoFilm[];
}

export const SerieReleases = ({ series }: SerieReleasesProps) => {
  return (
    <ul className="releases-list flex flex-col gap-6">
      {series.map((serie, index) => (
        <li key={index} className="flex flex-row gap-3.5">
          <figure className="h-[120px] w-[80px]">
            <img
              className="w-full h-full rounded-lg"
              src="https://i.pinimg.com/736x/e1/a8/d9/e1a8d9cf24da3e5546ce322000267b81.jpg"
              alt={serie.title}
            />
          </figure>
          <div className="flex flex-col gap-0.5 pt-0.5">
            <h3 className="text-lg font-normal">{serie.title}</h3>
            <p className="text-sm text-slate-50/80">
              <span className="text-orange-300 text-lg">
                8.21/<span className="text-sm mr-2">10</span>
              </span>
              {serie.duration} • {serie.year}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
