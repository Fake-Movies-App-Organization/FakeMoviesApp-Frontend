import { Hero } from "../../../components/Home/Hero/Hero"
import { MoviesRated } from "../../../components/Home/MoviesRated/MoviesRated"

export const HomePage = () => {
  return (
    <div className="w-full bg-[#2B3A55]">
      <Hero/>
      <MoviesRated/>
    </div>
  )
}
