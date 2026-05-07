import axios from 'axios'

export const useApi = () => {

    const config = useRuntimeConfig()

    const axiosInstance = axios.create({
        withCredentials: true,
        baseURL: config.public.BASE_URL,
    })

    const getUsers = () => axiosInstance.get('/users')
    const getUserById = (id: number) => axiosInstance.get(`/users/${id}`)
    const createPost = (data: any) => axiosInstance.post('/posts', data)

    return { getUsers, getUserById, createPost }
}