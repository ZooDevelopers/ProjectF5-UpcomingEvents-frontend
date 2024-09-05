import Repository from "../models/Repository";
import axios from 'axios'; 

export default class EventsRepository extends Repository {
    constructor(uri) {
        super(uri);
    }

    async getByType(type) {
        try {
            const url = `${this.uri}?type=${type}`;
            console.log('Fetching from URL:', url);
            const response = await fetch(url, {
                method: 'GET',
                credentials: 'include'  
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Data fetched:', data); 
            return data;
        } catch (error) {
            console.error('Failed to fetch events:', error.message);
            throw new Error('Error loading Events API');
        }
    }

    async deleteEvent(id) {
        try {
            const response = await axios.delete(`${this.uri}/${id}`, {
                withCredentials: true 
            });
            console.log('Event deleted successfully');
            return response.data;  
        } catch (error) {
            console.error('Error deleting event:', error.response ? error.response.data : error.message);
            throw new Error('Failed to delete event');
        }
    }
}

