<script setup>
import { ref, onMounted, computed } from 'vue';
import { useEventStore } from '@/stores/events';
import EventCard from '@/components/events/EventCard.vue'; 
import EventModal from '@/components/events/EventModal.vue'; 

const showModal = ref(false);
const currentEvent = ref(null);

const eventStore = useEventStore();

onMounted(async () => {
  await eventStore.setEvents(); 
});

const events = computed(() => eventStore.events);

const openModal = (event) => {
  currentEvent.value = event;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false; 
};
</script>

<template>
  <div class="max-w-[1290px] mx-auto xl:px-0 px-6">
    <h2 class="text-pink text-5xl font-bold font-rubik uppercase leading-tight">All Events</h2>
    
    <div v-if="events.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      <EventCard
        v-for="event in events"
        :key="event.getTitle()"
        :eventData="event"
        @openModal="openModal" 
      />
    </div>

    <EventModal v-if="showModal" :eventData="currentEvent" @close="closeModal" />
  </div>
</template>

<style scoped>

</style>