import { data as gallery } from "../../mocks/videoFilm";
import { GalleryGrid } from "./GalleryGrid";
import './Gallery.css'

export const Gallery = () => {

  return (
    <div className="flex-grow">
      <h1 className="text-4xl font-medium">Movies & Series Gallery</h1>
      <div className="bg-blue-300/10 pl-3 pr-8 py-3 mt-5">
        <p className="text-slate-50/80 leading-[1.85] mt-[-2.5px] text-pretty">
          En esta sección tendrás las últimas películas publicadas en cuevana,
          cada vez que subimos una película nueva, aquí verás el contenido más
          reciente y actualizado. Sin embargo, puedes visitar la{" "}
          <span className="font-medium text-blue-400">
            sección de peliculas tendencia del día
          </span>{" "}
          y{" "}
          <span className="font-medium text-blue-400">
            tendencia de la semana
          </span>
          .
        </p>
      </div>
      <GalleryGrid gallery={gallery} />
    </div>
  );
};
