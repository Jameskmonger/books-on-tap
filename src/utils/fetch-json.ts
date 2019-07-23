export const fetchJson = async <T>(url: string) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error during fetch: ${response.status}`);
        }

        const json = await response.json();

        return json as T;
    } catch (e) {
        throw e;
    }
};
