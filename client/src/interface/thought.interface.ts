export interface IThought {
   readonly _id: number,
   readonly content: string,
   readonly ownerId: string
   readonly date: number
}

export interface IThoughts {
   data: IThought[],
   count: number
}