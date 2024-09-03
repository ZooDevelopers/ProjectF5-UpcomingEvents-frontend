import Events from "../models/Events"

export default class EventsService {

    #repo

    constructor(repository) {
        this.#repo = repository
    }

    async getEvents() {
        const data = await this.#repo.getByType('events')

        const events = data.events.map( (events) => {
            return new Events(events.title, events.date, events.maxparticipants, events.description, events.imgUrl, events.is_featured, events.location, events.time)
        })

        return events
    }

}