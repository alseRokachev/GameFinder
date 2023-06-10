import {useAppSelector} from "../data/store/store.ts";
import {GameCard} from "../components/GameCard.tsx";

export const Newest = ({loading} : {loading : boolean}) => {
	const newestData = useAppSelector(state => state.allGamesData.newestGamesData)
	const darkTheme= useAppSelector(state => state.userData.darkTheme)
	return (
		<div>
			{loading ? <div className={'w-24 h-8 rounded-md mt-5 bg-slate-300 animate-pulse'}></div> : <p className={`${darkTheme ? 'text-slate-100' : 'text-slate-950'} font-bold text-2xl mt-5`}>Newest</p>}
			<div className={'sm:flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-16 place-items-center'}>
				{newestData.map(game => (
					<GameCard data={game} key={game.name}/>
				))}
			</div>
		</div>
	)
}