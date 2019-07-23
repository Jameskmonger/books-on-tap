export const fetchJson = async <T>(url: string) => {
    try {
        const response = await fetch(url);

        const json = await response.json();

        return json as T;
    } catch (e) {
        throw e;
    }
};
