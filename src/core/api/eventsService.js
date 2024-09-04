import Events from "../models/Events";

export default class EventsService {
    #repo;

    constructor(repository) {
        this.#repo = repository;
    }

    async getEvents() {
        try {
            const data = await this.#repo.getByType('events');

            if (!Array.isArray(data)) {
                throw new Error('La respuesta de la API no es un array de eventos válido.');
            }

            const events = data.map(event => {
                return new Events(
                    event.title,
                    event.date,
                    event.maxparticipants,
                    event.description,
                    event.imageUrl, 
                    event.is_featured === "true", 
                    event.location,
                    event.time
                );
            });

            return events;
        } catch (error) {
            console.error('Error al obtener eventos:', error.message);
            throw new Error('Error loading Events API');
        }
    }
}
