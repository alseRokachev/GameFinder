import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {SearchData} from "../slices/searchData.ts";
import {GamesData} from "../slices/gamesData.ts";
import {UserData} from "../slices/userData.ts";


export const store = configureStore({
    reducer: {
        searchData : SearchData.reducer,
        allGamesData : GamesData.reducer,
        userData : UserData.reducer
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector