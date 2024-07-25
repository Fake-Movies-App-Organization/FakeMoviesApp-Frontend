import { useNavigate } from "react-router-dom";
import { GithubIcon } from "../../../icons/GithubIcon";
import { EmailIcon } from "../../../icons/EmailIcon";
import NekoMovies from "../../../assets/nekomovies-logo.png";
import "./Login.css";
import { LockIcon } from "../../../icons/LockIcon";
import { FacebookIcon } from "../../../icons/FacebookIcon";
import { GoogleIcon } from "../../../icons/GoogleIcon";
import { TwitterIcon } from "../../../icons/TwitterIcon";

export const Login = () => {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <section id="login-background" className="h-full bg-slate-400 relative">
      <div className="flex items-center justify-center h-full">
        <div
          className="w-11/12 max-w-[430px] border-[1px] border-white/40 flex flex-col items-center rounded-xl
      justify-center py-10 px-10 md:px-14 bg-black/75"
        >
          <h1 className="text-3xl font-bold tracking-wide text-center leading-normal">
            Iniciar Sesion
          </h1>
          <form className="mt-10 w-full flex flex-col gap-8">
            <div className="flex h-full items-stretch">
              <div className="input-container">
                <input
                  className="input-field bg-transparent font-medium text-lg outline-none py-2.5 border-b-2 w-full pr-3"
                  placeholder=" "
                  type="email"
                />
                <span className="input-placeholder text-lg font-medium">
                  Email
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
                  type="password"
                />
                <span className="input-placeholder text-lg font-medium">
                  Password
                </span>
              </div>
              <div className="flex items-end h-full border-b-2 self-end pb-3.5">
                <LockIcon size="1.25" />
              </div>
            </div>
          </form>
          <div className="flex flex-row w-full items-center justify-between mt-[22px]">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="rememberMe"
                className="cursor-pointer mt-0.5"
              />
              <label
                htmlFor="rememberMe"
                className="font-normal text-slate-300 text-base select-none"
              >
                Remember Me
              </label>
            </div>
            <span className="text-sm text-slate-300 cursor-pointer hover:underline hidden xs:block">
              Forgot password?
            </span>
          </div>
          <button
            className="w-full mt-10 py-2 font-bold tracking-normal text-lg rounded-3xl
            bg-[#E50914] text-slate-50 hover:bg-[#B00710] transition-all duration-200 ease"
          >
            Log in
          </button>
          <div className="flex items-center mt-6 mb-4 w-full">
            <span className="flex-grow border-t border-gray-300"></span>
            <span className="px-2 text-xl mb-1.5">o</span>
            <span className="flex-grow border-t border-gray-300"></span>
          </div>
          <div className="flex flex-row gap-5">
            <div
              className="cursor-pointer bg-[#4267B2] p-2.5 rounded-full 
              hover:opacity-90 transition-all duration-200 ease"
            >
              <FacebookIcon />
            </div>
            <div
              className="cursor-pointer bg-[#14171A] p-2.5 rounded-full
              hover:opacity-90 transition-all duration-200 ease"
            >
              <TwitterIcon />
            </div>
            <div
              className="cursor-pointer bg-[#DB4437] p-2.5 rounded-full
              hover:opacity-90 transition-all duration-200 ease"
            >
              <GoogleIcon />
            </div>
          </div>
          <p className="mt-10 tracking-wide textfont-normal text-slate-300 text-center">
            Don't you have an account?{" "}
            <span
              className="font-medium text-slate-200 cursor-pointer hover:text-slate-50"
              onClick={() => navigateTo("register")}
            >
              Register
            </span>
          </p>
        </div>
      </div>
      <div className="absolute top-0 flex items-center justify-between w-full p-5 px-4 sm:px-8">
        <div>
          <img className="w-24" src={NekoMovies} alt="nekomovies_logo" />
        </div>
        <div className="text-white">
          <GithubIcon size={2.5} />
        </div>
      </div>
    </section>
  );
};
