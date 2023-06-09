import {memo, useEffect} from "react";
import {fetchGamesData} from "../functions/fetchData.ts";
import {GameCard} from "./GameCard.tsx";
import {useAppDispatch, useAppSelector} from "../data/store/store.ts";
import {addNewestGames} from "../data/slices/gamesData.ts";
import {IGame} from "../types/interfaces.ts";

export const NewestSection = memo(({loading}: { loading: boolean }) => {
    const newestData: IGame[] = useAppSelector(state => state.allGamesData.newestGamesData)
    const dispatch = useAppDispatch()
    useEffect(() => {
        fetchGamesData(`https://api.rawg.io/api/games?key=228b9fb27e3a48d095d01946f3fd434c&dates=2023-01-01,${new Date().toLocaleDateString().split('.').reverse().join('-')}`)
            .then(res => dispatch(addNewestGames(res)))
            .catch(e => console.log(e))
    }, [])
    return (
        <div className={'sm:flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-16 place-items-center'}>
            {newestData.map(game => (
                <GameCard data={game} key={game.name} loading={loading}/>
            ))}
        </div>
    )
})