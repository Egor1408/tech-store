export interface IBanner {
	id:number,
	image: string,
	title: string,
	description?: string[],
	rightText: boolean,
	price?: number,
	count?: number,
}