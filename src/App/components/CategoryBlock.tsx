import {useAppSelector} from "../data/store/store.ts";

export const CategoryBlock = ({title, onClick}: { title: string, onClick: () => void }) => {
    const darkTheme = useAppSelector(state => state.userData.darkTheme)
    return (
        <div className={`${darkTheme ? 'text-slate-100 hover:bg-gradient-to-r from-slate-800 to-slate-900' : 'text-black'} cursor-pointer w-60 h-32 rounded-xl border hover:shadow-md duration-300 flex items-center justify-center font-bold`} onClick={() => onClick()}>
            <p>{title}</p>
        </div>
    )
}