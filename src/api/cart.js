import instance from "./config";

export const getAll = () => {
    const url = `carts`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `carts/${id}`;
    return instance.get(url,id);
}
export const add = (cate) => {
    const url = `carts`;
    return instance.post(url, cate);
} 
