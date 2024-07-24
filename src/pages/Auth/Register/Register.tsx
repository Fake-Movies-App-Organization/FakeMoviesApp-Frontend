import { useNavigate } from "react-router-dom";
import NekoMovies from "../../../assets/nekomovies-logo.png";
import { EmailIcon } from "../../../icons/EmailIcon";
import { LockIcon } from "../../../icons/LockIcon";
import { PhoneIcon } from "../../../icons/PhoneIcon";
import { UserIcon } from "../../../icons/UserIcon";
import { UserPlusIcon } from "../../../icons/UserPlusIcon";
import { EmblaCarousel } from "../../../components/EmblaCarousel";
import "./Register.css";

export const Register = () => {
  const navigate = useNavigate();

  const navigateTo = (path: string = "") => {
    navigate(`/${path}`);
  };

  return (
    <section className="h-screen w-full relative">
      <div className="h-full grid grid-cols-1 lg:grid-cols-2 grid-rows-1 text-slate-50">
        <div className="h-full w-full hero hidden lg:block">
          <EmblaCarousel />
        </div>
        <div className="left-background h-full bg-stone-800 flex flex-col gap-5 justify-center shadow-2xl">
          <section className="left flex flex-col w-11/12 max-w-[575px] gap-6 mx-auto">
            <div className="flex flex-col items-center justify-center w-full mb-5">
              <img className="w-48" src={NekoMovies}></img>
            </div>
            <form className="px-10 pt-[100px] pb-8 font-poppins flex flex-col gap-10 bg-black/75 relative">
              <div
                className="register-message flex items-center justify-center h-16 text-white font-medium
              text-xl absolute top-0 w-full left-0"
              >
                <h2 className="gradient-text text-center">
                  Create your account here!
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch gap-6">
                <div className="flex h-full items-stretch">
                  <div className="input-container">
                    <input
                      className="input-field bg-transparent font-medium text-lg outline-none py-2.5 border-b-2 w-full pr-3"
                      placeholder=" "
                      type="text"
                    />
                    <span className="input-placeholder text-lg font-medium">
                      First Name
                    </span>
                  </div>
                  <div className="flex items-end h-full border-b-2 self-end pb-3.5">
                    <UserIcon size="1.15" />
                  </div>
                </div>
                <div className="flex h-full items-stretch">
                  <div className="input-container">
                    <input
                      className="input-field bg-transparent font-medium text-lg outline-none py-2.5 border-b-2 w-full pr-3"
                      placeholder=" "
                      type="text"
                    />
                    <span className="input-placeholder text-lg font-medium">
                      Last Name
                    </span>
                  </div>
                  <div className="flex items-end h-full border-b-2 self-end pb-3">
                    <UserPlusIcon size="1.30" />
                  </div>
                </div>
              </div>
              <div className="flex h-full items-stretch">
                <div className="input-container">
                  <input
                    className="input-field bg-transparent font-medium text-lg outline-none py-2.5 border-b-2 w-full pr-3"
                    placeholder=" "
                    type="text"
                  />
                  <span className="input-placeholder text-lg font-medium">
                    Email Address
                  </span>
                </div>
                <div className="flex items-end h-full border-b-2 self-end pb-3.5">
                  <EmailIcon size="1.25" />
                </div>
              </div>
              <div className="flex h-full items-stretch">
                <div className="input-container">
                  <input
                    className="input-field bg-transparent font-medium text-lg outline-none py-2.5 border-b-2 w-full pr-3"
                    placeholder=" "
                    type="text"
                  />
                  <span className="input-placeholder text-lg font-medium">
                    Phone Number
                  </span>
                </div>
                <div className="flex items-end h-full border-b-2 self-end pb-3.5">
                  <PhoneIcon size="1.25" />
                </div>
              </div>
              <div className="flex h-full items-stretch">
                <div className="input-container">
                  <input
                    className="input-field bg-transparent font-medium text-lg outline-none py-2.5 border-b-2 w-full pr-3"
                    placeholder=" "
                    type="text"
                  />
                  <span className="input-placeholder text-lg font-medium">
                    Password
                  </span>
                </div>
                <div className="flex items-end h-full border-b-2 self-end pb-3.5">
                  <LockIcon size="1.25" />
                </div>
              </div>
              <button
                className="w-full mt-3 py-2 font-bold tracking-normal text-lg rounded-3xl
            bg-[#E50914] text-slate-50 hover:bg-[#B00710] transition-all duration-200 ease"
              >
                Sign up
              </button>
              <p className="tracking-wide textfont-normal text-slate-300 text-center">
                Don't you have an account?{" "}
                <span
                  className="font-medium text-slate-200 cursor-pointer hover:text-slate-50"
                  onClick={() => navigateTo()}
                >
                  Register
                </span>
              </p>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
};
