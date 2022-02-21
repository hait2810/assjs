import instance from "./config";

export const search = (input) => {
    const url = `/products?q=${input}`;
    return instance.get(url,input);
}

