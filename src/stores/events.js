import { ref, computed} from 'vue';
import { defineStore } from 'pinia';


export const useEventStore = defineStore ('events', () =>{
    const events = ref ([])
    const isLoading = ref (false)

    const repo = new EventsRepository(import.meta.env.VITE_API_ENDPOINT)
    const service = new EventsRepository(repo)


    async function setEvents() {
        isLoading.value= true
        events.value = await service.getEvents()
        setTimeout(()=> {
            isLoading.value = false
        }, 2000)
        
    }
    return { events, isLoading, setEvents}
})