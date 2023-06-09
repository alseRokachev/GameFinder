import axios from "axios";

interface IGame {
    added_by_status : object,
    background_image: string,
    name : string,
    parent_platforms: [],
    dominant_color : string,
    metacritic: number,
    short_screenshots: Screenshots[]
}
interface Screenshots {
    image: string
}
export const fetchGamesData = async (url: string) : Promise<IGame[]> => {
    const res = await axios.get(url)
    if (!res) throw new Error('fetch failed')
    return res.data.results
}
