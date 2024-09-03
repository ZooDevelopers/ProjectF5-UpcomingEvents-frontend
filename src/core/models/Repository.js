export default class Repository {
    constructor(uri) {
        this.uri = uri;
    }

    getUri() {
        return this.uri;
    }

    async get() {
        try {
            const response = await fetch(this.uri);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Failed to fetch data:', error.message);
            throw new Error('Error loading API data');
        }
    }
}
