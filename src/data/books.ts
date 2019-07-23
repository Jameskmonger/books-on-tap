import { fetchJson } from "../utils/fetch-json";
import { Book } from "../models/book";

const ROOT_API_URL = "https://booksontap.azurewebsites.net/api";

export const getBooks = async () => fetchJson<Book[]>(`${ROOT_API_URL}/Books`);

export const getBook = async (id: string) => fetchJson<Book>(`${ROOT_API_URL}/Books`);
