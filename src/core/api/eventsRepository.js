import Repository from "../models/Repository"


export default class EventsRepository extends Repository {

    constructor(uri) {
        super(uri)
    }

    async getByType(type) {

        try {
            const response = await fetch(this.uri + `/?type=${type}`)
            const data = await response.json()
            return data    
        } catch (error) {
            throw new Error('Error loading Events API')
        }

    }

}