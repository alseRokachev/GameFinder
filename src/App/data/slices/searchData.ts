import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface searchData {
    searchData: string[],
    currentSearchData: string,
    gameGenre: string
}

const initialState: searchData = {
    searchData: [],
    currentSearchData: '',
    gameGenre: ''
}


export const SearchData = createSlice({
    name: 'Search Data',
    initialState,
    reducers: {
        addSearchData: (state, action: PayloadAction<string>) => {
            if (action.payload !== '') {
                if (state.searchData.length > 4) state.searchData.pop()
                state.searchData.unshift(action.payload)
                state.currentSearchData = action.payload
            }
        },
        setGameGenre: (state, action: PayloadAction<string>) => {
            state.gameGenre = action.payload
        }
    }
})

export default SearchData.reducer
export const {addSearchData, setGameGenre} = SearchData.actions