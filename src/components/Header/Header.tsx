import { useNavigate } from "react-router-dom";
import LogoImage from "../../assets/logo-image.png";
import NekoImage from "../../assets/neko-hd.jpeg";
import { BellIcon } from "../../icons/BellIcon";
import { SearchIcon } from "../../icons/SearchIcon";
import "./Header.css";

export const Header = () => {

  const navigate = useNavigate();

  const navigateTo = (path: string = "") => {
    navigate(`/${path}`);
  };

  return (
    <header className="h-20 sticky top-0 z-50 bg-[#121217] flex flex-row justify-between py-5 px-6">
      <div className="flex flex-row items-center gap-3 text-slate-50">
        <img src={LogoImage} className="w-16" alt="nekomovies_logo" />
        <h1 className="text-2xl mt-0.5 font-medium">NekoMovies</h1>
      </div>
      <nav className="flex flex-row gap-4">
        <ul className="flex flex-row gap-7 h-full items-center font-medium mr-2">
          <li className="text-slate-50/90 cursor-pointer" onClick={() => navigateTo("home")}>Home</li>
          <li className="text-slate-50/90 cursor-pointer" onClick={() => navigateTo("gallery")}>Gallery</li>
        </ul>
        <form className="search pl-5 pr-3 text-white">
          <input
            type="text"
            id="search"
            className="search__input text-white"
            placeholder="Search...."
            autoComplete="off"
          />
          <button type="button" className="search__button">
            <SearchIcon size="1"/>
          </button>
        </form>
        <button className="bg-blue rounded-3xl px-3 bg-[#292938]">
            <BellIcon size="1.25" />
          </button>
        <div className="flex cursor-pointer">
          <img className="rounded-full" src={NekoImage} />
        </div>
      </nav>
    </header>
  );
};
