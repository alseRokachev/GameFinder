import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IGame} from "../../types/interfaces.ts";


interface IGames {
    gamesData: IGame[],
    newestGamesData: IGame[],
    consoleGames: IGame[]
}

const initialState: IGames = {
    gamesData: [],
    newestGamesData: [],
    consoleGames : []
}

export const GamesData = createSlice({
    name: 'Games Data',
    initialState,
    reducers: {
        addGames: (state, action: PayloadAction<IGame[]>) => {
            state.gamesData = action.payload
            console.log(action.payload)
        },
        addNewestGames: (state, action: PayloadAction<IGame[]>) => {
            state.newestGamesData = action.payload
        },
        addConsoleGames: (state,action : PayloadAction<IGame[]>) => {
            state.consoleGames = action.payload
        }
    }
})

export default GamesData.reducer
export const {addGames, addNewestGames, addConsoleGames} = GamesData.actions