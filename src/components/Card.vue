<script setup>
import { ref, onMounted, computed } from 'vue';
import { useEventStore } from '@/stores/events';
import Button from '@/components/base/Button.vue';
import EventModel from '@/components/EventModel.vue'; // Importar el nuevo componente

const showModal = ref(false);
const currentEvent = ref(null);

const eventStore = useEventStore();

onMounted(async () => {
  await eventStore.setEvents();
});

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
        :key="event.getTitle()"
        class="flex flex-col w-full max-w-sm mx-auto bg-purple-800 text-white shadow-lg rounded-lg overflow-hidden"
      >
        <!-- Imagen del evento con click handler para mostrar el modal -->
        <div class="cursor-pointer" @click="openModal(event)">
          <img :src="event.getImgUrl()" alt="Event Image" class="w-full h-48 object-cover" />
        </div>
        <!-- Contenido de la tarjeta -->
        <div class="p-4">
          <div class="flex justify-between items-center text-sm text-grey-300 mb-2">
            <span><i class="far fa-calendar-alt"></i> {{ event.getDate() }}</span>
            <span><i class="far fa-clock"></i> {{ event.getTime() }}</span>
          </div>
          <h3 class="text-lg text-peach-500 mx-0 my-2">{{ event.getTitle() }}</h3>
          <p class="text-base text-grey-300 mb-4">{{ truncateText(event.getDescription(), 10) }}</p>
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

     <EventModel :showModal="showModal" :event="currentEvent" @close="closeModal" />
   
  </div>
</template>

<style scoped>
/* Puedes agregar estilos personalizados aquí si es necesario */
</style>
