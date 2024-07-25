import LogoImage from "../../assets/logo-image.png";
import ubicationLogo from "../../assets/ubication-logo.svg";
import FacebookIcon from "../../assets/facebook-icon.svg";
import TwitterIcon from "../../assets/twitter-icon.svg";
import InstagramIcon from "../../assets/instagram-icon.svg";
import WhatsappIcon from "../../assets/whatsapp-icon.svg";
import YoutubeIcon from "../../assets/youtube-icon.svg";

export const Footer = () => {
  return (
    <section className="bg-[#121217] py-20">
      <div className="flex flex-col gap-16 container-footer">
        <div
          className="flex flex-col h-full justify-center gap-10
            lg:flex-row lg:justify-between lg:gap-0 w-full"
        >
          <div className="flex flex-row gap-5 items-center">
            <img className="w-24" src={LogoImage} />
            <h1 className="text-2xl mt-0.5 font-medium">NekoMovies</h1>
          </div>
          <div className="flex flex-row gap-5 self-start lg:self-center h-10 ">
            <input
              className="w-full lg:h-full self-stretch indent-5 sm:w-72 rounded-full bg-white opacity-[.90]"
              type="email"
              placeholder="neko@gmail.com"
            ></input>
            <button className="flex items-center rounded-2xl py-3 px-5 h-full bg-[#1A1AE5]">
              <span>Contact</span>
            </button>
          </div>
        </div>
        <div
          className="text-white font-poppins grid grid-auto-rows grid-cols-1 gap-10
            md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg: lg:grid-cols-4"
        >
          <div className="flex flex-row gap-5 md:items-center md:order-1 lg:order-1 lg:items-start">
            <img
              className="w-5 h-5 self-start mt-[3px] md:mt-0 lg:mt-[3px] md:self-auto cursor-pointer"
              src={ubicationLogo}
              alt="_location"
            />
            <p className="font-poppins tracking-wide max-w-fit text-balance">
              3824 Steele Street, Sanbortan
              <br />
              New Hampshire, 21871
            </p>
          </div>
          <div
            className="flex flex-col items-start justify-center 
                md:order-3 lg:order-2 lg:items-center lg:justify-start"
          >
            <div className="flex flex-col gap-5">
              <div className="flex flex-row items-center gap-3">
                <img
                  className="h-5 w-5 cursor-pointer hover:scale-110"
                  src={WhatsappIcon}
                  alt="_phone"
                />
                <p>+51 543-123-4567</p>
              </div>
              <div className="flex flex-row items-center gap-3">
                <img
                  className="h-5 w-5 cursor-pointer hover:scale-110"
                  src={YoutubeIcon}
                  alt="_email"
                />
                <p>NekoMovies.com</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-10 justify-center
                md:gap-3 md:flex-col md:order-2 lg:gap-14 lg:flex-row lg:order-3 lg:justify-center"
          >
            <ul className="flex flex-col md:flex-row lg:flex-col gap-3">
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Jobs</a>
              </li>
              <li>
                <a href="/">Press</a>
              </li>
              <li>
                <a href="/">Service</a>
              </li>
            </ul>
            <ul className="flex flex-col md:flex-row lg:flex-col gap-3">
              <li>
                <a href="/">Contact us</a>
              </li>
              <li>
                <a href="/">Terms</a>
              </li>
              <li>
                <a href="/">Privacy</a>
              </li>
              <li>
                <a href="/">Questions</a>
              </li>
            </ul>
          </div>
          <div
            className="flex items-start justify-center md:items-center md:justify-start 
                md:order-4 lg:order-4 lg:items-start lg:justify-end"
          >
            <div className="flex flex-row gap-4 justify-self-end">
              <a className="" href="/">
                <img
                  className="w-10 h-10 border-[1px] border-white rounded-full p-[8px] block"
                  src={FacebookIcon}
                  alt="_facebook"
                />
              </a>
              <a className="" href="/">
                <img
                  className="w-10 h-10 border-[1px] border-white rounded-full p-[8px] block"
                  src={TwitterIcon}
                  alt="_twitter"
                />
              </a>
              <a className="" href="/">
                <img
                  className="w-10 h-10 border-[1px] border-white rounded-full p-[8px] block"
                  src={InstagramIcon}
                  alt="_instagram"
                />
              </a>
              <a className="" href="/">
                <img
                  className="w-10 h-10 border-[1px] border-white rounded-full p-[8px] block"
                  src={YoutubeIcon}
                  alt="_instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
