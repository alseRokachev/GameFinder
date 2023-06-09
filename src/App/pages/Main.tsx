import {GreetingSection} from "../components/GreetingSection.tsx";
import {NewestSection} from "../components/NewestSection.tsx";
import {useAppSelector} from "../data/store/store.ts";


export const Main = ({loading} : {loading : boolean}) => {
    const darkTheme = useAppSelector(state => state.userData.darkTheme)
    return (
        <div className={`h-full`}>
            <div className={'w-full h-[80vh]'}>
                <GreetingSection loading={loading}/>
            </div>
            {loading ? <div className={'w-24 h-8 rounded-md mt-24 bg-slate-300 animate-pulse'}></div> : <p className={`${darkTheme ? 'text-slate-100' : 'text-slate-950'} font-bold text-2xl mt-24`}>Newest</p>}
            <div className="w-full min-h-[80vh]">
                <NewestSection loading={loading}/>
            </div>
        </div>
    )
}