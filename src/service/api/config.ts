import { request } from "../request"

export function fetchConfig() {
    return request.get<any>("/api")
}
