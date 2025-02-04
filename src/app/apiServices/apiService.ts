import {IUser} from "@/app/models/IUser";
import {axiosInstance} from "@/app/apiServices/axiosInstance";
import {IPost} from "@/app/models/IPost";
import {IComment} from "@/app/models/IComment";
export const getUsers = async (): Promise<IUser[]> => {
    const {data} = await axiosInstance.get('/users')
    return data.users
}

export const getPosts = async (): Promise<IPost[]> => {
    const {data} = await axiosInstance.get('/posts')
    return data.posts
}

export const getComments = async (): Promise<IComment[]> => {
    const {data} = await axiosInstance.get('/comments')
    return data.comments
}
