import {useAppDispatch} from "../data/store/store.ts";
import {memo} from "react";
import {CategoryBlock} from "../components/CategoryBlock.tsx";
import {useNavigate} from "react-router-dom";
import {setGameGenre} from "../data/slices/searchData.ts";

export const Categories = memo(() => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const onClick = (name : string) => {
        dispatch(setGameGenre(name))
        navigate('/search')
    }
    return (
        <div
            className={'sm:flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-16 place-items-center'}>
            <CategoryBlock title={'Horror'} onClick={() => onClick('horror')}/>
            <CategoryBlock title={'RPG'} onClick={() => onClick('rpg')}/>
            <CategoryBlock title={'Fantasy'} onClick={() => onClick('fantasy')}/>
            <CategoryBlock title={'Action'} onClick={() => onClick('action')}/>
        </div>
    )
})