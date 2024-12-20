import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import axios from "axios"

import { REFRESH_TOKEN_CODE } from "~/config/service"
import {
    handleAxiosError,
    handleBackendError,
    handleResponseError,
    handleServiceResult,
    transformRequestData
} from "~/utils/service"

interface ErrorResponse {
    msg: string
}

/**
 * 封装axios请求类
 */
export default class CustomAxiosInstance {
    instance: AxiosInstance

    backendConfig: Service.BackendResultConfig

    /**
     *
     * @param axiosConfig - axios配置
     * @param backendConfig - 后端返回的数据配置
     */
    constructor(
        axiosConfig: AxiosRequestConfig,
        backendConfig: Service.BackendResultConfig = {
            codeKey: "code",
            dataKey: "data",
            msgKey: "msg",
            successCode: [200, 201, 202, 204]
        }
    ) {
        this.backendConfig = backendConfig
        this.instance = axios.create(axiosConfig)
        this.setInterceptor()
    }

    setInterceptor() {
        /** 设置请求拦截器 */
        this.instance.interceptors.request.use(
            async (config) => {
                const handleConfig = { ...config }
                if (handleConfig.headers) {
                    // 数据转换
                    const contentType = handleConfig.headers["Content-Type"] as UnionKey.ContentType
                    handleConfig.data = await transformRequestData(handleConfig.data, contentType)
                    // 设置token
                    // handleConfig.headers.Authorization = localStg.get("token") || ""
                }
                return handleConfig
            },
            (axiosError: AxiosError) => {
                const error = handleAxiosError(axiosError)
                return handleServiceResult(error, null)
            }
        )
        /** 设置响应拦截器 */
        this.instance.interceptors.response.use(
            (async (response) => {
                const { status } = response
                if (status === 200 || status < 300 || status === 304) {
                    const backend = response.data
                    const { codeKey, dataKey, successCode } = this.backendConfig
                    // 响应成功
                    if (successCode.includes(backend[codeKey])) {
                        return handleServiceResult(null, backend[dataKey])
                    }

                    // token失效, 刷新token
                    if (REFRESH_TOKEN_CODE.includes(backend[codeKey])) {
                        const config = response.config
                        if (config) {
                            return this.instance.request(config)
                        }
                    }

                    const error = handleBackendError(backend, this.backendConfig)
                    return handleServiceResult(error, null)
                }
                const error = handleResponseError(response)
                return handleServiceResult(error, null)
            }) as (response: AxiosResponse<any, any>) => Promise<AxiosResponse<any, any>>,
            (axiosError: AxiosError<ErrorResponse>) => {
                axiosError.message = axiosError.response?.data?.msg || ""
                const error = handleAxiosError(axiosError)
                return handleServiceResult(error, null)
            }
        )
    }
}
