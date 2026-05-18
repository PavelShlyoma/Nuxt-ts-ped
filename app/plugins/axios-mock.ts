// plugins/axios-mock.ts
import MockAdapter from 'axios-mock-adapter'
import axios, {type AxiosInstance} from "axios";
import users from '~/assets/users/users.json'
import type baseProject from '~/types/baseUser.ts'

export default defineNuxtPlugin(():{ provide: { axiosInstance: AxiosInstance } } => {
    const config = useRuntimeConfig()

    const axiosPlugin: AxiosInstance = axios.create({
        withCredentials: true,
        baseURL: config.public.BASE_URL,
    })


        const mock = new MockAdapter(axiosPlugin, { delayResponse: 500 })

        mock.resetHandlers()

        mock.onGet('/users').reply(200, {
            users: [
                { id: 1, name: 'Алексей', email: 'alex@example.com' },
                { id: 2, name: 'Мария', email: 'maria@example.com' }
            ]
        })

        // Имитация GET /users/:id с динамическим параметром
        mock.onGet(/\/content\/[^\/]+/).reply((config: axios.AxiosRequestConfig<any>): [number, {}] => {
            const tag: string | undefined = config.url?.split('/').pop().toLowerCase()
            if (tag === 'all') {
                return [200, users]
            }
            const usersFilter = users.map(user => {
                const filteredProjects = user.portfolio.projects.filter(project => {
                    return project.tags.some(t => t === tag)
                })
                if (filteredProjects.length === 0) {
                    return null;
                }
                return {
                    ...user,
                    portfolio: {
                        ...user.portfolio,
                        projects: filteredProjects
                    }
                }
            }).filter(user => user !== null)
            return [200, usersFilter]
        })

        mock.onGet(/\/project\/[^\/]+/).reply((config: axios.AxiosRequestConfig<any>): [number, baseProject] => {
            const id: number | undefined = +config.url?.split('/').pop()

            const usersFilter = users.map(user => {
                const filteredProjects = user.portfolio.projects.filter(project => {
                    return project.id === id && project.published === true
                })
                if (filteredProjects.length === 0) {
                    return null;
                }
                return {
                    ...user,
                    portfolio: {
                        ...user.portfolio,
                        projects: filteredProjects
                    }
                }
            }).filter(user => user !== null)

            if (usersFilter.length === 0) {
                throw new Error('No projects found.')
            }

            return [200, usersFilter[0]]
        })

        // Имитация POST /posts
        mock.onPost('/posts').reply((config) => {
            try {
                const data = JSON.parse(config.data || '{}')
                return [201, {
                    id: Date.now(),
                    ...data,
                    createdAt: new Date().toISOString()
                }]
            } catch (error) {
                return [400, { error: 'Invalid JSON' }]
            }
        })

        mock.onGet('/error').reply(500, {
            error: 'Internal server error'
        })

        mock.onAny().passThrough()

        console.log('✅ Axios mock adapter initialized on client')

    return {
        provide: {
            axiosInstance: axiosPlugin,
        }
    }

})