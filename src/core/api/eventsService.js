import Events from "../models/Events";

export default class EventsService {
    #repo;

    constructor(repository) {
        this.#repo = repository;
    }

    async getEvents() {
        try {
            // Obtiene los datos de la API
            const data = await this.#repo.getByType('events');

            // Verifica que `data` sea un array
            if (!Array.isArray(data)) {
                throw new Error('La respuesta de la API no es un array de eventos válido.');
            }

            // Mapea los eventos a instancias de la clase `Events`
            const events = data.map(event => {
                return new Events(
                    event.title,
                    event.date,
                    event.maxparticipants,
                    event.description,
                    event.imageUrl, // Cambiado de imgUrl a imageUrl para que coincida con la respuesta de la API
                    event.is_featured,
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
