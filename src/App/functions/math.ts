import {IGame} from "../types/interfaces.ts";
import {SetStateAction} from "react";

export const getRandom = (length: number) => {
    return Math.round(Math.random() * length)
}


export const filterBy = <T extends IGame>(array: T[], name: string, genre ?: string): SetStateAction<IGame[]> => {
    const arrCopy: T[] = [...array]
    if (genre !== '') {
        return arrCopy.filter(item => item.name.toLowerCase().trim().includes(name.toLowerCase().trim())
            && item.tags.find(genreName => genreName.name.toLowerCase().trim() === genre?.toLowerCase().trim()))
    } else {
        return arrCopy.filter(item => item.name.toLowerCase().trim().includes(name.toLowerCase().trim()))
    }
}