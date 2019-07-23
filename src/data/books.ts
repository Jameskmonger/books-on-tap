import { fetchJson } from "../utils/fetch-json";
import { Book } from "../models/book";
import { ApiResponse } from "../models/api-response";

const ROOT_API_URL = "https://booksontap.azurewebsites.net/api";

export const getBooks = async () => {
    const response = await fetchJson<ApiResponse<Book[]>>(`${ROOT_API_URL}/Books`);

    return response.results;
};

export const getBook = async (id: string) => {
    const response = await fetchJson<ApiResponse<Book>>(`${ROOT_API_URL}/Books/${id}`);

    return response.results;
};
