import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import BannerOne from "../../../assets/fairy-oddparents-background.webp";
import BannerTwo from "../../../assets/intensamente-hero.jpeg";
import BannerThree from "../../../assets/deadpool-background.jpg";

const slidesData = [
  {
    title: "Inside Out",
    description: "2015 • 1h 35m • Película • Aventura, Comedia",
    background: `linear-gradient(to right, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.45) 100%), 
      url(${BannerTwo}) center/cover no-repeat`,
  },
  {
    title: "The Boys: Season 4",
    description: "2019 • 1h 02m • Serie de TV • Crimen, Acción",
    background: `linear-gradient(to right, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.45) 100%), 
      url(${BannerOne}) center/cover no-repeat`,
  },
  {
    title: "Deadpool 3",
    description: "2019 • 2h 07m • Película • Acción, Comedia",
    background: `linear-gradient(to right, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.45) 100%), 
      url(${BannerThree}) center/cover no-repeat`,
  },
];

export const HeroCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slidesData.map((slide, index) => (
          <div className="embla__slide" key={index}>
            <div
              className="hero-background w-full aspect-[12/5] object-cover relative"
              style={{ background: slide.background }}
            >
              <div className="flex flex-col gap-5 absolute bottom-28 left-20 font-newsreader">
                <h1 className="text-7xl font-extrabold">{slide.title}</h1>
                <p className="text-[22px] tracking-normal font-medium text-slate-50/80">
                  {slide.description}
                </p>
                <div className="flex flex-row mt-4 gap-3 group font-medium tracking-wide text-lg h-[44px] w-fit">
                  <button className="bg-blue rounded-sm px-8 h-full bg-[#1A1AE5]">
                    <span>Play</span>
                  </button>
                  <button className="bg-blue rounded-sm px-6 h-full bg-[#121212]">
                    <span>Watchlist</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
