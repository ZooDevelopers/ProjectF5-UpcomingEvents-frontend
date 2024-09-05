<script setup>
import { ref, onMounted, computed } from 'vue';
import { useEventStore } from '@/stores/events';
import Button from '@/components/base/Button.vue';
import EventModel from '@/components/EventModel.vue'; // Importar el nuevo componente

const showModal = ref(false);
const currentEvent = ref(null);

const eventStore = useEventStore();

// Obtener los eventos cuando el componente se monte
onMounted(async () => {
  await eventStore.fetchEvents(); // Cambia setEvents a fetchEvents
});

// Computed para obtener los eventos del store
const events = computed(() => eventStore.events);

const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
};

const openModal = (event) => {
  currentEvent.value = event;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <div>
    <!-- Mostrar tarjetas de eventos -->
    <div v-if="events.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="event in events"
        :key="event.id" 
        class="flex flex-col w-full max-w-sm mx-auto bg-purple-800 text-white shadow-lg rounded-lg overflow-hidden"
      >
        <!-- Imagen del evento con click handler para mostrar el modal -->
        <div class="cursor-pointer" @click="openModal(event)">
          <img :src="event.imageUrl" alt="Event Image" class="w-full h-48 object-cover" /> <!-- Asegúrate de que `imageUrl` sea el nombre correcto -->
        </div>
        <div class="p-4">
          <div class="flex justify-between items-center text-sm text-grey-300 mb-2">
            <span><i class="far fa-calendar-alt"></i> {{ event.date }}</span> <!-- Asegúrate de que `date` sea el nombre correcto -->
            <span><i class="far fa-clock"></i> {{ event.time }}</span> <!-- Asegúrate de que `time` sea el nombre correcto -->
          </div>
          <h3 class="text-lg text-peach-500 mx-0 my-2">{{ event.title }}</h3> <!-- Asegúrate de que `title` sea el nombre correcto -->
          <p class="text-base text-grey-300 mb-4">{{ truncateText(event.description, 10) }}</p> <!-- Asegúrate de que `description` sea el nombre correcto -->
          <div class="text-base text-grey-300 mb-2">
            <span><i class="fas fa-map-marker-alt"></i> {{ event.location }}</span> <!-- Asegúrate de que `location` sea el nombre correcto -->
          </div>
          <div class="flex justify-between items-center">
            <span class="text-base text-grey-300"><i class="fas fa-user"></i> Spots Left: {{ event.maxParticipants }}</span> <!-- Asegúrate de que `maxParticipants` sea el nombre correcto -->
            <Button label="Join Event" />
          </div>
        </div>
      </div>
    </div>

    <EventModel :showModal="showModal" :event="currentEvent" @close="closeModal" />
  </div>
</template>

<style scoped>
/* Puedes agregar estilos personalizados aquí si es necesario */
</style>

