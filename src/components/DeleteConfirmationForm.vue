<script setup>
import { defineProps, defineEmits } from 'vue';
import { useEventStore } from '@/stores/events'; 

const props = defineProps({
  id: Number, // Cambiado a Number
  label: String,
  type: String,
  placeholder: String,
  modelValue: String,
  required: Boolean,
  error: String,
});

const emit = defineEmits(['close', 'confirm']);

const eventStore = useEventStore();

const closeModal = () => {
  emit('close');
};

const cancelDelete = () => {
  closeModal();
};

const confirmDelete = async () => {
  try {
    await eventStore.deleteEvent(props.id); // Asegúrate de que id es un número
    closeModal();
    emit('confirm');
  } catch (error) {
    console.error('Error deleting event:', error);
  }
};
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
    <div class="bg-purple-800 text-pink font-rubik p-6 rounded-lg w-80">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold text-pink-200">DELETE THE EVENT</h2>
        <button @click="closeModal" class="text-pink-200 text-xl">&times;</button>
      </div>

      <p class="text-sm mb-6 text-grey">Are you sure you want to delete the event?</p>

      <div class="flex justify-end gap-4">
        <button @click="cancelDelete" class="px-4 py-1 bg-purple-200 text-sm font-bold uppercase text-grey rounded-full">CANCEL</button>
        <button @click="confirmDelete" class="px-4 py-1 bg-peach-500 text-sm font-bold uppercase text-purple-700 rounded-full">DELETE</button>
      </div>
    </div>
  </div>
</template>
