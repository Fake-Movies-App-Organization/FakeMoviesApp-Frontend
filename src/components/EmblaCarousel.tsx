import useEmblaCarousel from "embla-carousel-react";
import PosterOne from "../assets/intensamente-background.webp";
import PosterTwo from "../assets/cazador-background.jpg";
import PosterThree from "../assets/spiderman-background.webp";
import Autoplay from "embla-carousel-autoplay";

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 7000, stopOnInteraction: false }),
  ]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src={PosterOne} alt="poster_1" />
        </div>
        <div className="embla__slide">
          <img src={PosterTwo} alt="poster_2" />
        </div>
        <div className="embla__slide">
          <img src={PosterThree} alt="poster_3" />
        </div>
      </div>
    </div>
  );
};
