import { defineStore } from 'pinia';
import axios from 'axios';

export const useEventStore = defineStore('eventStore', {
  state: () => ({
    events: [],
    isLoading: false,
  }),
  actions: {
    async fetchEvents() {
      this.isLoading = true;
      try {
        const response = await axios.get('http://localhost:8080/api/v1/events');
        if (response.data && Array.isArray(response.data)) {
          this.events = response.data;
        } else {
          console.error('Unexpected response structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        this.isLoading = false;
      }
    },
    async deleteEvent(id) {
      try {
        const response = await axios.delete(`http://localhost:8080/api/v1/events/${id}`, { 
            withCredentials: true });
        console.log('Delete response status:', response.status);
        await this.fetchEvents(); 
      } catch (error) {
        console.error('Error deleting event:', error.response ? error.response.data : error.message);
        throw new Error('Failed to delete event');
      }
    },
  },
});
