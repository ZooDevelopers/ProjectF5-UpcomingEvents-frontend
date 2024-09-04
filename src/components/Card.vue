<script setup>
import { ref, onMounted, computed } from 'vue';
import { useEventStore } from '@/stores/events'; 
import Button from '@/components/base/Button.vue';

const showModal = ref(false);
const currentEvent = ref(null);

const eventStore = useEventStore();
onMounted(async () => {
  await eventStore.setEvents();
});
const events = computed(() => eventStore.events);
</script>
<template>
  <div>
    <div v-if="events.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="event in events" :key="event.getTitle()" class="flex flex-col w-full max-w-sm mx-auto bg-purple-800 text-white shadow-lg rounded-lg overflow-hidden">
        <div class="cursor-pointer" @click="() => { currentEvent.value = event; showModal.value = true; }">
          <img :src="event.getImgUrl()" alt="Event Image" class="w-full h-48 object-cover" />
        </div>
        <div class="p-4">
          <div class="flex justify-between items-center text-sm text-grey-300 mb-2">
            <span><i class="far fa-calendar-alt"></i> {{ event.getDate() }}</span>
            <span><i class="far fa-clock"></i> {{ event.getTime() }}</span>
          </div>
          <h3 class="text-lg text-peach-500 mx-0 my-2">{{ event.getTitle() }}</h3>
          <p class="text-base text-grey-300 mb-4">
            {{ event.getDescription() }}
          </p>
          <div class="text-base text-grey-300 mb-2">
            <span><i class="fas fa-map-marker-alt"></i> {{ event.getLocation() }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-base text-grey-300"><i class="fas fa-user"></i> Spots Left: {{ event.getMaxparticipants() }}</span>
            <Button label="Join Event" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50" @click.self="showModal = false">
      <div class="relative bg-purple-900 text-white p-6 rounded-lg w-full max-w-lg mx-4 sm:mx-0">
        <button @click="showModal = false" class="absolute top-2 right-2 text-white">
          <i class="fas fa-times"></i>
        </button>
        <img :src="currentEvent?.getImgUrl()" alt="Event Image" class="w-full h-48 object-cover rounded-lg mb-4" />
        <h2 class="text-2xl text-peach-500 mt-0">{{ currentEvent?.getTitle() }}</h2>
        <p class="leading-6 mb-4">
          {{ currentEvent?.getDescription() }}
        </p>
        <div class="text-base text-grey-300 mb-2">
          <span><i class="fas fa-map-marker-alt"></i> {{ currentEvent?.getLocation() }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-base text-grey-300"><i class="fas fa-user"></i> Spots Left: {{ currentEvent?.getMaxparticipants() }}</span>
          <Button label="Join Event" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>