import "./Hero.css";

export const Hero = () => {
  return (
    <div
      id="hero-background"
      className="w-full aspect-[7/3] object-cover relative"
    >
      <div className="flex flex-col gap-5 absolute bottom-36 left-20 font-newsreader">
        <h1 className="text-7xl font-extrabold">The Godfather</h1>
        <p className="text-[22px] tracking-normal font-extralight text-slate-50/70">
          1972 • 2h 58m • Drama, Crime
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
  );
};
