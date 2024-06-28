export interface IPost {
    id:string;
    date:string;
    title:string;
    body?:string;
}

export type TApiPost = Omit<IPost,'id'>;

export interface IPostMutation {
    date: string;
    title: string;
    body?: string;
}