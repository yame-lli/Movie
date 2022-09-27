import { PiniaPluginContext } from "pinia"
import { toRaw } from "vue"

const __piniaKey = '__PINIAKEY__'

type Option = {
    key?: string
}

const setStorage = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value))
}

const getStorage = (key: string) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}

const piniaPlugin = (option: Option) => {
    return (context: PiniaPluginContext) => {
        const { store } = context

        const data = getStorage(`${option?.key ?? __piniaKey}-${store.$id}`)

        store.$subscribe(() => {
            setStorage(`${option?.key ?? __piniaKey}-${store.$id}`, toRaw(store.$state))

        })

        return {
            ...data
        }
    }

}

export default piniaPlugin