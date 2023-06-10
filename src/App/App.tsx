import {Header} from "./components/Header.tsx";
import {Main} from "./pages/Main.tsx";
import {Route, Routes} from "react-router-dom";
import {Search} from "./pages/Search.tsx";
import {lazy, Suspense, useEffect, useState} from "react";
import {Loading} from "./components/Loading.tsx";
import {useAppDispatch, useAppSelector} from "./data/store/store.ts";
import {fetchGamesData} from "./functions/fetchData.ts";
import {addConsoleGames, addGames} from "./data/slices/gamesData.ts";
import {Newest} from "./pages/Newest.tsx";
import {Console} from "./pages/Console.tsx";

const Categories = lazy(() => import('./pages/Categories.tsx').then(module => ({
    default: module.Categories
})))
export const App = () => {
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState<boolean>(true)
    const darkTheme = useAppSelector(state => state.userData.darkTheme)
    useEffect(() => {
        fetchGamesData('https://api.rawg.io/api/games?key=228b9fb27e3a48d095d01946f3fd434c&search_size=50')
            .then(res => setTimeout(() => {
                dispatch(addGames(res))
                setLoading(false)
            }, 2000))
            .catch(e => console.log(e))
    }, [])

    useEffect(() => {
        fetchGamesData('https://api.rawg.io/api/games?key=228b9fb27e3a48d095d01946f3fd434c&platforms=18,1,7')
            .then(res => dispatch(addConsoleGames(res)))
            .catch(e => console.log(e))
    })
    return (
        <div className={`${darkTheme ? 'bg-slate-900' : 'bg-white'} min-h-screen flex justify-center duration-300`}>
            <div className="container h-fit">
                <Header/>
                <Suspense fallback={<Loading/>}>
                    <Routes>
                        <Route path={'/'} element={<Main loading={loading}/>}/>
                        <Route path={'/search'} element={<Search/>}/>
                        <Route path={'/categories'} element={<Categories/>}/>
                        <Route path={'/newest'} element={<Newest loading={loading}/>}/>
                        <Route path={'/console'} element={<Console loading={loading}/>}/>
                    </Routes>
                </Suspense>
            </div>
        </div>
    )
}