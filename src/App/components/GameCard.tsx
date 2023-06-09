import {IGame} from "../types/interfaces.ts";
import {memo, useState} from "react";
import {MetacriticMark} from "./MetacriticMark.tsx";
import {useInView} from "react-intersection-observer";

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


export const GameCard = memo(({data, loading}: IGameProps) => {
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
                                className={`${cardHover ? 'h-[300px]' : 'h-[55%]'} absolute bottom-0 w-full bg-white rounded-b-xl duration-500 overflow-y-hidden`}>
                                <p className={'text-center mt-5 text-xl px-3'}>{data.name}</p>
                                <div className={'flex flex-wrap justify-center text-sm px-3'}>
                                    <p className={'mr-1'}><b>Available on</b> :</p>
                                    {data?.parent_platforms?.map((platform, index) => (
                                        <span
                                            className={'mr-1'}>{platform.platform.name}{index !== data?.parent_platforms!.length - 1 && ','}</span>
                                    ))}
                                </div>
                                {data.stores && (
                                    <div className={'flex flex-wrap justify-center text-sm px-3'}>
                                        <p className={'mr-1'}><b>Stores</b> :</p>
                                        {data?.stores.map((store, index) => (
                                            <span
                                                className={'mr-1'}>{store.store.name}{index !== data?.parent_platforms!.length - 1 && ','}</span>
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