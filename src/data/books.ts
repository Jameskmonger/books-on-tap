import { fetchJson } from "../utils/fetch-json";
import { Book } from "../models/book";
import { ApiRequest } from "../models/api-request";

const ROOT_API_URL = "https://booksontap.azurewebsites.net/api";

export const getBooks = async () => {
    const response = await fetchJson<ApiRequest<Book[]>>(`${ROOT_API_URL}/Books`);

    return response.results;
};

export const getBook = async (id: string) => {
    const response = await fetchJson<ApiRequest<Book>>(`${ROOT_API_URL}/Books/${id}`);

    return response.results;
};
