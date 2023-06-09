export interface IGame {
    background_image: string,
    name: string,
    added_by_status: object,
    tags ?: Property[],
    metacritic: number,
}

interface Property {
    id: number,
    name: string,
    slug: string
}

export interface IObject extends IGame{
    tags: Property[]
}
