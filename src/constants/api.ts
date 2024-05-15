
const BACKEND_URL = "http://localhost:8000";

export function getUrl(endpoint: string) {
    return `${BACKEND_URL}/${endpoint}`;
}
