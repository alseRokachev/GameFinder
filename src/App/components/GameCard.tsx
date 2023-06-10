import {IGame} from "../types/interfaces.ts";
import {memo, useState} from "react";
import {MetacriticMark} from "./MetacriticMark.tsx";
import {useInView} from "react-intersection-observer";
import {useAppSelector} from "../data/store/store.ts";

interface IGameCard extends IGame {
    parent_platforms?: IPlatforms[],
    metacritic: number,
    stores?: IStores[],
    short_screenshots?: Screenshots[],
}

interface Screenshots {
    image: string
}

interface IPlatforms {
    platform: IPlatformsData
}

interface IPlatformsData {
    id: number,
    name: string
}

interface IStores {
    store: IStore
}

interface IStore {
    name: string
}

interface IGameProps {
    data: IGameCard,
    loading?: boolean
}

const Platforms = {
    'pc': 'icons8-windows-100.png',
    'playstation': 'icons8-playstation-100.png',
    'xbox' : 'icons8-xbox-100.png',
    'nintendo' : 'icons8-nintendo-switch-handheld-100.png'
}

export const GameCard = memo(({data, loading}: IGameProps) => {
    const darkTheme = useAppSelector(state => state.userData.darkTheme)
    const [cardHover, setCardHover] = useState<boolean>(false)
    const {ref, inView} = useInView({threshold: 0.1, triggerOnce: true})
    return (
        <>
            {(!loading && (
                <div className={`h-[400px] w-[300px] border-slate-300 border rounded-xl relative`} ref={ref}
                     onMouseOver={() => setCardHover(true)} onMouseLeave={() => setCardHover(false)}>
                    {inView ? (
                        <>
                            <img loading={'lazy'} src={data?.background_image} alt=""
                                 className={`rounded-t-xl w-full min-h-[45%] max-h-[45%]`}/>
                            <MetacriticMark mark={data.metacritic}/>
                            <div
                                className={`${cardHover ? 'h-[300px]' : 'h-[55%]'} ${darkTheme ? 'bg-slate-800 text-slate-100' : 'bg-slate-200'} absolute bottom-0 w-full rounded-b-xl duration-500 overflow-y-hidden`}>
                                <p className={'text-center mt-5 text-xl px-3'}>{data.name}</p>
                                <div className={'flex flex-wrap justify-center text-sm px-3'}>
                                    <p className={'mr-1'}><b>Available on</b> :</p>
                                    {data?.parent_platforms?.map((platform) => (
                                        <>
                                            {platform.platform.name.toLowerCase() === 'pc' && (
                                                <span
                                                    className={'mr-1 flex items-center'}><img src={Platforms.pc} alt=""
                                                                                              className={'w-4 h-4'}/>
                                                </span>
                                            )}
                                            {platform.platform.name.toLowerCase() === 'playstation' && (
                                                <span
                                                    className={'mr-1 flex items-center'}><img src={Platforms.playstation} alt=""
                                                                                              className={'w-4 h-4'}/>
                                                </span>
                                            )}
                                            {platform.platform.name.toLowerCase() === 'xbox' && (
                                                <span
                                                    className={'mr-1 flex items-center'}><img src={Platforms.xbox} alt=""
                                                                                              className={'w-4 h-4'}/>
                                                </span>
                                            )}
                                            {platform.platform.name.toLowerCase() === 'nintendo' && (
                                                <span
                                                    className={'mr-1 flex items-center'}><img src={Platforms.nintendo} alt=""
                                                                                              className={'w-4 h-4'}/>
                                                </span>
                                            )}
                                        </>
                                    ))}
                                </div>
                                {data.stores && (
                                    <div className={'flex flex-wrap justify-center text-sm px-3'}>
                                        <p className={'mr-1'}><b>Stores</b> :</p>
                                        {data?.stores.map((store) => (
                                            <span
                                                className={'mr-1 text-stone-400'}>{store.store.name}</span>
                                        ))}
                                    </div>
                                )}
                                <div
                                    className={`flex overflow-x-scroll scrollbar-x pb-1 ${cardHover ? 'mt-2' : 'mt-36'} duration-500`}>
                                    {data?.short_screenshots?.map(screenshot => (
                                        <img loading={'lazy'} src={screenshot.image} alt=""
                                             className={'w-fit max-h-[90px] min-h-[90px]'}
                                             draggable={false}/>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (<div className={'w-full h-full animate-pulse bg-slate-200'}></div>)}
                </div>
            ))}
            {loading && (
                <div
                    className={'w-[300px] h-[400px] border-slate-300 animate-pulse bg-slate-300 border rounded-xl relative'}>
                </div>)}
        </>
    )
})