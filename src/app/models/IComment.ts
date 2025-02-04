export interface IComment {
    id: string,
    body: string,
    postId: number,
    likes: number,
    user: IUserData
}
interface IUserData {
    id: number,
    username: string,
    fullName: string
}