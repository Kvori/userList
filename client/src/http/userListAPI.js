import { $authHost } from "./index.js";

export const getUserList = async () => {
    const {data} = await $authHost.get('/users/data')
    return data
}

export const deleteUser = async (id) => {
    const response = await $authHost.delete(`/users/delete?id=${id}`)
    return response
}

export const blockUser = async (id) => {
    const response = await $authHost.get(`/users/block?id=${id}`)
    return response
}

export const unblockUser = async (id) => {
    const response = await $authHost.get(`/users/unblock?id=${id}`)
    return response
}