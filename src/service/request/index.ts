import { createRequest } from "./request"

export const request = createRequest({
    baseURL: `http://${process.env.NEXT_PUBLIC_APP_URL}:${process.env.NEXT_PUBLIC_APP_PORT}`
})
