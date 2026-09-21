export const getNews =(limit: number = 10) => {
    return fetch(`https://dummyjson.com/posts?limit=${limit}`)
        .then((response) => response.json());
};