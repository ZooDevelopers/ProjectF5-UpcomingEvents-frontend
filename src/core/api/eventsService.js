import Events from "../models/Events";

export default class EventsService {
    #repo;

    constructor(repository) {
        this.#repo = repository;
    }

    async getEvents(page = 0, size = 6) {
        try {
            const data = await this.#repo.getByType(`page=${page}&size=${size}`);

            if (!data || !Array.isArray(data.content)) {
                throw new Error('La respuesta de la API no es un array de eventos válido.');
            }

            const events = data.map(event => new Events(
                event.title,
                event.date,
                event.maxparticipants,
                event.description,
                event.imageUrl,
                event.is_featured,
                event.location,
                event.time
            ));

            return { events, totalPages: data.totalPages }; 
        } catch (error) {
            console.error('Error al obtener eventos:', error.message);
            throw new Error('Error loading Events API');
        }
    }

    async deleteEvent(eventId) {
        try {
            const result = await this.#repo.deleteEvent(eventId);
            return result;
        } catch (error) {
            console.error('Error al eliminar evento:', error.message);
            throw new Error('Error deleting Event');
        }
    }
}
