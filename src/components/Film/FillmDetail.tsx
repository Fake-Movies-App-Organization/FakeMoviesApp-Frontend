import { FacebookIcon } from "../../icons/FacebookIcon";
import { FilmIcon } from "../../icons/FilmIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { CircularProgress } from "../CircularProgress";
import { CastCarousel } from "./CastCarousel";
import './FilmDetail.css'

export const FillmDetail = () => {
  return (
    <article className="w-full grid grid-cols-1 lg:grid-cols-[auto,1fr] grid-rows-[1fr,auto] lg:grid-rows-1 gap-10">
      <figure className="w-[27rem]">
        <img src="https://i.pinimg.com/736x/e1/a8/d9/e1a8d9cf24da3e5546ce322000267b81.jpg" />
      </figure>
      <div className="flex flex-col gap-3 justify-start">
        <div className="flex flex-row items-center justify-between">
          <h1 className="-mt-[7px] text-4xl font-bold">Avengers: End Game</h1>
          <button
            className="flex flex-row gap-3 items-center px-4 py-3 tracking-wide 
          rounded-lg bg-[#2B3A55] font-medium"
          >
            <span>Watch Trailer</span>
            <FilmIcon />
          </button>
        </div>
        <h4 className="text-slate-50/80 mb-2">Deadpool & Wolverine</h4>
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row h-full">
            <CircularProgress value={40} />
            <div
              className="flex flex-row h-full items-center ml-5 px-5 text-slate-50/70"
              style={{ borderLeft: "1px solid rgba(79, 107, 149, 0.7)" }}
            >
              <span className="-mt-[2px]">2h 08min • 2024</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-2 border-[1px] border-slate-50/35 px-3 h-full py-2 rounded-xl">
              <ShareIcon size="1.15" />
              <span className="-mt-[1px]">Share</span>
            </div>
            <div className="flex h-full rounded-full p-2.5 items-center bg-[#4267B2]">
              <FacebookIcon />
            </div>
            <div className="flex h-full rounded-full p-2.5 items-center bg-[#00bcff]">
              <TwitterIcon />
            </div>
          </div>
        </div>
        <p className="my-4 text-slate-50/70 tracking-wide leading-[1.80]">
          Un Wade Wilson apático se esfuerza en la vida civil. Sus días como el
          mercenario moralmente flexible Deadpool quedaron atrás. Cuando su
          mundo natal se enfrenta a una amenaza existencial, Wade debe, a
          regañadientes, volver a la acción junto a un reacio Wolverine.
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-slate-50/85">
            <span className="text-[#edb709]/90 font-medium">Género: </span>Ciencia ficcion, Acción, Comedia
          </p>
          <p className="text-slate-50/85">
            <span className="text-[#edb709]/90 font-medium">Actores principales: </span>Ryan Reynolds, Hugh Jackman, Emma
            Corrin, Matthew Macfadyen
          </p>
          <p className="text-slate-50/85">
            <span className="text-[#edb709]/90 font-medium">Languages: </span>English, Spanish, France
          </p>
          <div className="cast-carousel w-full mt-5">
            <h3 className="text-xl uppercase font-medium tracking-wide">Cast</h3>
            <CastCarousel/>
          </div>
        </div>
      </div>
    </article>
  );
};
