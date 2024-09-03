<script setup>
import { ref, onMounted, computed } from 'vue';
import { useEventStore } from '@/stores/events'; // Importa el store
import Button from '@/components/base/Button.vue';
// Estado reactivo para controlar la visibilidad del modal
const showModal = ref(false);
const currentEvent = ref(null);
// Usa el store de eventos
const eventStore = useEventStore();
// Obtén los eventos cuando el componente se monte
onMounted(async () => {
  await eventStore.setEvents();
});
// Computed property para obtener todos los eventos
const events = computed(() => eventStore.events);
</script>
<template>
  <div>
    <!-- Mostrar una tarjeta para cada evento -->
    <div v-if="events.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="event in events" :key="event.getTitle()" class="flex flex-col w-full max-w-sm mx-auto bg-purple-800 text-white shadow-lg rounded-lg overflow-hidden">
        <!-- Imagen del evento con click handler para mostrar el modal -->
        <div class="cursor-pointer" @click="() => { currentEvent.value = event; showModal.value = true; }">
          <img :src="event.getImgUrl()" alt="Event Image" class="w-full h-48 object-cover" />
        </div>
        <!-- Contenido de la tarjeta -->
        <div class="p-4">
          <!-- Fecha y hora del evento -->
          <div class="flex justify-between items-center text-sm text-grey-300 mb-2">
            <span><i class="far fa-calendar-alt"></i> {{ event.getDate() }}</span>
            <span><i class="far fa-clock"></i> {{ event.getTime() }}</span>
          </div>
          <!-- Título del evento -->
          <h3 class="text-lg text-peach-500 mx-0 my-2">{{ event.getTitle() }}</h3>
          <!-- Descripción del evento -->
          <p class="text-base text-grey-300 mb-4">
            {{ event.getDescription() }}
          </p>
          <!-- Ubicación del evento y Spots Left -->
          <div class="text-base text-grey-300 mb-2">
            <span><i class="fas fa-map-marker-alt"></i> {{ event.getLocation() }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-base text-grey-300"><i class="fas fa-user"></i> Spots Left: {{ event.getMaxparticipants() }}</span>
            <!-- Botón para unirse al evento -->
            <Button label="Join Event" />
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Pop-up -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50" @click.self="showModal = false">
      <div class="relative bg-purple-900 text-white p-6 rounded-lg w-full max-w-lg mx-4 sm:mx-0">
        <!-- Botón de cierre en la esquina superior derecha -->
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
          <!-- Botón para unirse al evento -->
          <Button label="Join Event" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Puedes agregar estilos aquí si es necesario */
</style>