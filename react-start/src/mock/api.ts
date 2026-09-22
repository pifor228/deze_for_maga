export type CatImage = {
    id: string;
    url: string;
    width: number;
    height: number;
};

export const getCats = (limit: number = 10): Promise<CatImage[]> => {
    return fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Не удалось загрузить котиков");
            }

            return response.json() as Promise<CatImage[]>;
        });
};