import instance from "./config";

export const getAll = () => {
    const url = `categorys`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `categorys/${id}`;
    return instance.get(url,id);
}
export const add = (cate) => {
    const url = `categorys`;
    return instance.post(url, cate);
} 
export const remove = (id) => {
    const url = `categorys/${id}`;
    return instance.delete(url);
}
export const update = (cate) => {
    const url = `/categorys/${cate.id}`;
    return instance.put(url, cate);
}
export const getSP = (id) => {
    const url =  `/categorys/${id}/products`;
    return instance.get(url,id);
}