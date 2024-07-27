import { Hero } from "../../../components/Home/Hero/Hero"
import { MoviesRated } from "../../../components/Home/MoviesRated/MoviesRated"
import { SeriesRated } from "../../../components/Home/SeriesRated/SeriesRated"
import './HomePage.css'

export const HomePage = () => {
  return (
    <div className="w-full bg-[#161A30]">
      <Hero/>
      <MoviesRated/>
      <SeriesRated/>
    </div>
  )
}
