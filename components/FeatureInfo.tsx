import { useContext } from "react"
import { MovieContext } from "../lib/MovieContext"
import FeaturedMovie from "../models/FeaturedMovie"
import Image from "next/image"

const FeatureInfo: React.FC = () => {
    const movieContext = useContext(MovieContext)

    const movies = movieContext.movies
    console.log(movies)

    return (
        <div className=" z-50 absolute text-white top-60 left-28 info flex flex-col gap-16">
            <h1 className="text-6xl font bold">movies[5].title</h1>
            <div className="flex gap-5 w-full justify-center text-zinc-900">
                <button className="pr-8 pl-8 p-2 bg-zinc-200 text-2xl font-bold hover:bg-zinc-400 flex justify-center items-center gap-2">
                    <Image src="/play_arrow.svg" height={40} width={40} alt="play" />
                Play</button>
                <button className="pr-8 pl-8 p-2 bg-zinc-400 text-2xl hover:bg-zinc-600 bg-opacity-20 flex justify-center items-center gap-2 text-zinc-100 font-semibold">
                    <Image src="/info.svg" height={40} width={40} alt="info" />
                    More Info</button>
            </div>
          </div>
    )

}

export default FeatureInfo