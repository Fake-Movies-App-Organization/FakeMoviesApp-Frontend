import LogoImage from "../../assets/logo-image.png";
import NekoImage from "../../assets/neko-hd.jpeg";
import { BellIcon } from "../../icons/BellIcon";

export const Header = () => {
  return (
    <header className="h-20 sticky top-0 z-50 bg-[#121217] flex flex-row justify-between py-5 px-6">
      <div className="flex flex-row items-center gap-3 text-slate-50">
        <img src={LogoImage} className="w-16" alt="nekomovies_logo" />
        <h1 className="text-2xl mt-0.5 font-medium">NekoMovies</h1>
      </div>
      <nav className="flex flex-row gap-5">
        <ul className="flex flex-row gap-7 h-full items-center group font-medium mr-2">
          <li className="text-slate-50/90">Home</li>
          <li className="text-slate-50/90">Movies</li>
          <li className="text-slate-50/90">TV SHows</li>
          <li className="text-slate-50/90">New & Popular</li>
        </ul>
        <div className="flex flex-row gap-3 items-center">
          <button className="bg-blue rounded-xl px-5 h-full bg-[#1A1AE5]">
            <span>Create</span>
          </button>
          <button className="bg-blue rounded-xl px-3 h-full bg-[#292938]">
            <BellIcon size="1.25" />
          </button>
        </div>
        <div className="flex">
          <img className="rounded-full" src={NekoImage} />
        </div>
      </nav>
    </header>
  );
};
