import {useAppDispatch, useAppSelector} from "../data/store/store.ts";
import {useEffect, useState} from "react";
import {filterBy} from "../functions/math.ts";
import {IGame} from "../types/interfaces.ts";
import {GameCard} from "../components/GameCard.tsx";
import {setGameGenre} from "../data/slices/searchData.ts";

interface IGameCard extends IGame {
    parent_platforms?: IPlatforms[],
    metacritic: number,
    stores?: IStores[],
    short_screenshots?: Screenshots[],
}

interface Screenshots {
    image: string
}

interface IPlatforms {
    platform: IPlatformsData
}

interface IPlatformsData {
    id: number,
    name: string
}

interface IStores {
    store: IStore
}

interface IStore {
    name: string
}


export const Search = () => {
    const dispatch = useAppDispatch()
    const [filteredGames, setFilteredGames] = useState<IGameCard[]>([])
    const propertyFilterTheme = useAppSelector(state => state.searchData.gameGenre)
    const searchData = useAppSelector(state => state.searchData.currentSearchData)
    const gamesData = useAppSelector(state => state.allGamesData.gamesData)
    useEffect(() => setFilteredGames(filterBy(gamesData, searchData, propertyFilterTheme)), [propertyFilterTheme, searchData])
    return (
        <>
            {propertyFilterTheme !== '' && (
                <div
                    className={'uppercase bg-slate-950 w-fit px-3 py-2 text-slate-300 rounded-xl mt-4 duration-500 flex items-center cursor-pointer'}
                    onClick={() => dispatch(setGameGenre(''))}>
                    <p className={'mr-3'}>{propertyFilterTheme}</p>
                    <img src="icons8-close-100.png" alt="" className={'h-4'}/>
                </div>
            )}
            <div className={'xsm:flex xsm:flex-wrap sm:grid md:grid-cols-3 lg:grid-cols-4 gap-10 mt-16'}>
                {filteredGames.map(game => (
                    <GameCard data={game} key={game.name}/>
                ))}
                {!filteredGames.length && <p className={'font-bold text-center mt-8 col-span-full'}>Nothing found</p>}
            </div>
        </>
    )
}