import { useNavigate } from "react-router-dom";
import { PlayIcon } from "../../icons/PlayIcon";
import { VideoFilm } from "../../mocks/videoFilm";

interface GalleryGridProps {
  gallery: VideoFilm[];
}

export const GalleryGrid = ({ gallery }: GalleryGridProps) => {

  const navigate = useNavigate();

  const navigateToDetail = (id: string) => {
    navigate(`/film/${id}`);
  }

  return (
    <div className="gallery-container">
      <div className="movie-list mt-8 w-full">
        {gallery.map((item) => {
          return (
            <article
              key={item.id}
              className="card flex flex-col gap-2.5 h-full group cursor-pointer"
              onClick={() => navigateToDetail(item.id)}
            >
              <figure className="h-full relative">
                <div className="image-container overflow-hidden h-full relative">
                  <img
                    className="h-full rounded-md"
                    src="https://i5.walmartimages.com/seo/Avengers-Infinity-War-Movie-Poster-Print-Regular-Style-Size-24-X-36_65e23347-2ccc-4581-9700-581e0ea9c3a8.a808f8889bfa9e368659fbefc5e5dda4.jpeg"
                  ></img>
                </div>
                <div
                  className="absolute border-[1.5px] border-slate-50 p-6 rounded-full hidden group-hover:block
                  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
                >
                  <PlayIcon size="1.45" />
                </div>
                <div className="absolute bg-blue-600 text-white bottom-3 right-3 rounded-3xl px-2">
                  <p className="font-medium text-sm mt-[-0.5px] tracking-wide">
                    {item.year}
                  </p>
                </div>
              </figure>
              <div className="flex flex-col gap-1 group-hover:text-orange-300/90">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="text-base tracking-wide font-normal group-hover:text-white text-slate-50/70">
                  {item.author}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
