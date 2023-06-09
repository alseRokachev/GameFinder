import {memo} from "react";

export const MetacriticMark = memo(({mark}: { mark: number }) => {
    return (
        <>
            {mark <= 40 && <div
                className={'w-9 h-9 rounded-full bg-red-500 absolute right-2 top-2 flex items-center justify-center text-sm font-bold text-slate-50 font-geo'}>{mark}%</div>}
            {mark >= 40 && mark <= 60 && <div
                className={'w-9 h-9 rounded-full bg-orange-500 absolute right-2 top-2 flex items-center justify-center text-sm font-bold text-slate-50 font-geo'}>{mark}%</div>}
            {mark >= 60 && mark <= 75 && <div
                className={'w-9 h-9 rounded-full bg-yellow-400 absolute right-2 top-2 flex items-center justify-center text-sm font-bold text-slate-50 font-geo'}>{mark}%</div>}
            {mark > 75 && <div
                className={'w-9 h-9 rounded-full bg-green-500 absolute right-2 top-2 flex items-center justify-center text-sm font-bold text-slate-50 font-geo'}>{mark}%</div>}
            {mark === null && <div
                className={'w-9 h-9 rounded-full bg-slate-400 absolute right-2 top-2 flex items-center justify-center text-sm font-bold text-slate-50 font-geo'}>?</div>}
        </>
    )
})