import { judgeRenderingEnv } from "~/hooks"
import { deCrypto, enCrypto } from "../crypto"

interface StorageData<T> {
    value: T
    expire: number | null
}

function createLocalStorage<T extends StorageInterface.Local = StorageInterface.Local>() {
    const { isServer } = judgeRenderingEnv()
    if (isServer) {
        return {
            set: () => {},
            get: () => null,
            remove: () => {},
            clear: () => {}
        }
    }

    function set<K extends keyof T>(
        key: K,
        value: T[K],
        expire: number | null = process.env.LOCAL_STORAGE_CACHE_TIME
            ? parseInt(process.env.LOCAL_STORAGE_CACHE_TIME)
            : null
    ) {
        const storageData: StorageData<T[K]> = {
            value,
            expire: expire !== null ? new Date().getTime() + expire * 1000 : null
        }
        const json = enCrypto(storageData)
        window.localStorage.setItem(key as string, json)
    }

    function get<K extends keyof T>(key: K) {
        const json = window.localStorage.getItem(key as string)
        if (json) {
            let storageData: StorageData<T[K]> | null = null
            try {
                storageData = deCrypto(json)
            } catch {
                // 防止解析失败
            }
            if (storageData) {
                const { value, expire } = storageData
                // 在有效期内直接返回
                if (expire === null || expire >= Date.now()) {
                    return value as T[K]
                }
            }
            remove(key)
            return null
        }
        return null
    }

    function remove(key: keyof T) {
        window.localStorage.removeItem(key as string)
    }
    function clear() {
        window.localStorage.clear()
    }

    return {
        set,
        get,
        remove,
        clear
    }
}

export const localStg = createLocalStorage()
