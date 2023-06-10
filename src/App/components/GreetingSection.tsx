import React, {useEffect, useState} from "react";
import '../../index.css'
import {useAppSelector} from "../data/store/store.ts";
import {getRandom} from "../functions/math.ts";
interface IGameProps {
    loading: boolean
}

export const GreetingSection: React.FC<IGameProps> = React.memo(({loading}) => {
    const [randomNumb, setRandomNumb] = useState(0)
    useEffect(() => setRandomNumb(getRandom(10)), [])
    const gameData = useAppSelector(state => state.allGamesData.gamesData[randomNumb])
    return (
        <div className="w-full h-full flex justify-center">
            {!loading && (
                <div
                    className={`w-full md:h-5/6 lg:h-auto bg-slate-100 h-full relative`}>
                    <div className={`h-full w-full bg-no-repeat bg-center bg-cover`}
                         style={{backgroundImage: `url(${gameData?.background_image})`}}></div>
                    <div
                        className={`${!loading ? 'h-3/4' : 'h-1/2'} bg-gradient-to-t from-black w-full absolute bottom-0 duration-700 z-50`}></div>
                    <p className={`${!loading ? 'opacity-100 duration-700 bottom-20' : 'opacity-0 -bottom-full'} left-12 absolute font-bold text-5xl text-slate-50 z-50 font-nunito`}>{gameData?.name}</p>
                    <button
                        className={`${!loading ? 'opacity-100 duration-1000 bottom-10' : 'opacity-0'} font-poppins hover:bg-slate-50 hover:text-slate-950 hover:duration-500 left-12 border border-slate-50 text-slate-50 absolute z-50 px-8 py-1`}>See
                        more
                    </button>
                </div>
            )}
            {loading && (
                <div
                    className={`w-full bg-slate-200 animate-pulse h-full relative duration-500 overflow-y-hidden`}>
                </div>
            )}
        </div>
    )
})