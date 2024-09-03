<script setup>
import { ref } from 'vue';

const eventData = ref({
  content: [
    // Aquí va la lista de eventos
  ],
});

const currentPage = ref(0);
const totalPages = ref(5); // Ajusta según tu lógica

const removeEvent = (id) => {
  // Implementa la lógica para eliminar el evento
};

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--;
    // Implementa la lógica para cargar la nueva página
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++;
    // Implementa la lógica para cargar la nueva página
  }
};
</script>

<template>
  <div class="bg-purple-900 text-white p-8 rounded-lg">
    <h1 class="text-4xl font-rubik text-peach-500 mb-6">Manage Events</h1>
    <div class="bg-purple-800 p-4 rounded-lg">
      <EventCard 
        v-for="event in eventData.content" 
        :key="event.id" 
        :event="event" 
        @eventDeleted="removeEvent" 
        class="mb-4 last:mb-0"
      />
      <p v-if="eventData.content.length === 0" class="text-center text-peach-500">No events found.</p>
    </div>
    <div class="flex justify-between items-center mt-6">
      <button 
        @click="prevPage" 
        :disabled="currentPage === 0" 
        class="bg-peach-500 text-purple-900 py-2 px-4 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Previous
      </button>
      <span class="text-lg font-inter text-peach-500">
        Page {{ currentPage + 1 }} of {{ totalPages }}
      </span>
      <button 
        @click="nextPage" 
        :disabled="currentPage >= totalPages - 1" 
        class="bg-peach-500 text-purple-900 py-2 px-4 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  </div>
</template>

