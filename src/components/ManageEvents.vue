<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useEventStore } from '@/stores/events'; // Importa el store de eventos
import Button from './base/Button.vue'; 
import DeleteConfirmationForm from './DeleteConfirmationForm.vue'; // Modal de confirmación

const router = useRouter();
const eventStore = useEventStore();
const showModal = ref(false); // Para mostrar el modal de confirmación
const selectedEventId = ref(null); // ID del evento seleccionado para eliminar

// Cargar los eventos al montar el componente
onMounted(() => {
  eventStore.fetchEvents(); // Fetch events desde el store
});

// Mostrar modal de confirmación antes de eliminar el evento
const deleteEvent = (id) => {
  selectedEventId.value = id;
  showModal.value = true; // Muestra el modal de confirmación
};

// Confirmar la eliminación del evento
const handleConfirmDelete = async () => {
  try {
    await eventStore.deleteEvent(selectedEventId.value); // Elimina el evento usando el store
    showModal.value = false; // Cierra el modal al completar la eliminación
  } catch (error) {
    console.error('Error deleting event:', error);
  }
};

const editEvent = (id) => {
  router.push({ name: 'editeventform', params: { id } }); // Redirige al formulario de edición
};

const addNewEvent = () => {
  router.push({ name: 'addeventform' }); // Redirige al formulario de agregar evento
};

const closeModal = () => {
  showModal.value = false; // Cierra el modal de confirmación
};

</script>

<template>
  <div class="p-8 bg-purple-800 text-purple-50 rounded-lg">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-4xl font-rubik text-pink">MANAGE EVENTS</h1>
      <Button label="Add New Event" @click="addNewEvent" /> 
    </div>

    <div class="overflow-x-auto bg-purple-600 rounded-lg border border-purple-800">
      <table class="min-w-full text-left border-collapse">
        <thead class="bg-purple-400">
          <tr>
            <th class="px-6 py-4 text-pink border-purple-700">Title</th>
            <th class="px-6 py-4 text-pink border-purple-700">Date</th>
            <th class="px-6 py-4 text-pink border-purple-700">Time</th>
            <th class="px-6 py-4 text-pink border-purple-700">Spots Left</th>
            <th class="px-6 py-4 text-pink border-purple-700">Featured</th>
            <th class="px-6 py-4 text-pink border-purple-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in eventStore.events" :key="event.id" class="hover:bg-purple-100">
            <td class="px-6 py-4 border-b border-purple-700">{{ event.title }}</td>
            <td class="px-6 py-4 border-b border-purple-700">{{ event.date }}</td>
            <td class="px-6 py-4 border-b border-purple-700">{{ event.time }}</td>
            <td class="px-6 py-4 border-b border-purple-700">{{ event.maxparticipants }}</td>
            <td class="px-6 py-4 border-b border-purple-700">{{ event.is_featured ? 'Yes' : 'No' }}</td>
            <td class="px-6 py-4 flex space-x-2 border-b border-purple-700">
              <button @click="editEvent(event.id)" class="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded">
                ✏️
              </button>
              <button @click="deleteEvent(event.id)" class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                🗑️
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal para confirmar eliminación -->
    <DeleteConfirmationForm
      v-if="showModal"
      :id="selectedEventId"
      @close="closeModal"
      @confirm="handleConfirmDelete"
    />
  </div>
</template>
