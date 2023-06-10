import React, {SyntheticEvent, useState} from "react";
import {useAppDispatch, useAppSelector} from "../data/store/store.ts";
import {addSearchData} from "../data/slices/searchData.ts";
import {useNavigate} from "react-router-dom";
import {changeTheme} from "../data/slices/userData.ts";


export const Header = React.memo(() => {
        const dispatch = useAppDispatch()
        const navigate = useNavigate()
        const [inputValue, setInputValue] = useState<string>('')
        const darkTheme = useAppSelector(state => state.userData.darkTheme)
        const handleInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.code === 'Enter') {
                dispatch(addSearchData(inputValue))
                setInputValue(inputValue)
                navigate('/search')
            }
        }
        const handleSearch = (e: SyntheticEvent<HTMLButtonElement>) => {
            e.preventDefault()
            dispatch(addSearchData(inputValue))
            setInputValue(inputValue)
            navigate('/search')
        }
        return (
            <header className={`${darkTheme ? 'text-slate-300' : 'text-slate-950'} w-full flex h-20 duration-500`}>
                <div className="w-1/2 h-full flex items-center relative">
                    <div className={'font-bold w-1/4 hover:cursor-pointer flex items-center'}>
                        <span onClick={() => {
                            navigate('/')
                            setInputValue('')
                        }}>gamer.io</span>
                        <div
                            className={`${darkTheme ? 'bg-slate-900 border border-slate-500' : 'bg-slate-200 border border-slate-900'} ml-4 w-10 h-5 rounded-xl flex items-center relative`}
                            onClick={() => dispatch(changeTheme())}>
                            <div
                                className={`${darkTheme ? 'left-1/2 bg-slate-100' : 'left-0 bg-slate-800'} absolute w-5 h-5 rounded-full duration-300 flex justify-center items-center`}>
                                <span className={'text-[13px]'}>{darkTheme ? '🌕' : '☀'}</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-11/12 h-9 relative">
                        <input type="text" value={inputValue}
                               onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleInputEnter(e)}
                               onInput={(e: SyntheticEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)}
                               className={`${darkTheme ? 'border-slate-400 outline-slate-100 text-black' : 'border-black outline-black'} w-full h-full border-2 rounded-2xl focus:bg-slate-100 pl-3 pr-28 relative z-50`}/>
                        <button onClick={(e) => handleSearch(e)}
                                className={`${darkTheme ? 'bg-slate-100 border-slate-400 text-slate-950' : 'bg-black text-slate-50 border-black'} font-bold absolute right-0  w-24 h-full rounded-2xl border text-sm z-50`}>Search
                        </button>
                    </div>
                </div>
                <div className="w-1/2 flex cursor-pointer">
                    <div className="w-1/3 flex items-center justify-center font-medium"
                         onClick={() => navigate('/categories')}>Categories
                    </div>
                    <div className="w-1/3 flex items-center justify-center font-medium"
                         onClick={() => navigate('/newest')}
                    >Newest
                    </div>
                    <div className="w-1/3 flex items-center justify-center font-medium"
                         onClick={() => navigate('/console')}>
                        Console
                    </div>
                </div>
            </header>
        )
    }
)
