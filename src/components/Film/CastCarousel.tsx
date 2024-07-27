import useEmblaCarousel from "embla-carousel-react";
import { actors } from "../../mocks/actors";
import { shuffleArray } from "../../helpers/shuffleArray";

export const CastCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false });
  
  const actorsShuffle = shuffleArray(actors);

  return (
    <div className="embla-1 w-full mt-4">
      <div className="embla__viewport-1" ref={emblaRef}>
        <div className="embla__container-1 h-full -mr-0.5">
          {actorsShuffle.map((actor, index) => (
            <div
              className="embla__slide-1 h-full pr-3 cursor-grab relative"
              key={index}
            >
              <figure className="h-full relative">
                <img className="h-full w-full" src={actor.bannerImg} />
                <div
                  className="absolute bottom-0 opacity-80 bg-black py-1.5 w-full 
                text-start pl-3 font-base text-white text-normal"
                >
                  <span>{actor.name}</span>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
