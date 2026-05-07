// plugins/axios-mock.client.ts
import MockAdapter from 'axios-mock-adapter'
import axios, {type AxiosInstance} from "axios";

export default defineNuxtPlugin((nuxtApp):{ provide: { axiosInstance: AxiosInstance } } => {
    const config = useRuntimeConfig()

    const axiosPlugin: AxiosInstance = axios.create({
        withCredentials: true,
        baseURL: config.public.BASE_URL,
    })


    if (process.client && config.public.NUXT_PUBLIC_USE_MOCKS === true) {

        const mock = new MockAdapter(axiosPlugin, { delayResponse: 500 })

        mock.resetHandlers()

        mock.onAny().passThrough()

        console.log('✅ Axios mock adapter initialized on client')
    }

    return {
        provide: {
            axiosInstance: axiosPlugin,
        }
    }

})