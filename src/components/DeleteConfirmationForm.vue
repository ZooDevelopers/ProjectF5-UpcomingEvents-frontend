<script setup>
import { defineEmits, defineProps } from 'vue';

// Definimos las propiedades que se utilizarán en el componente
const props = defineProps({
  id: String,
  label: String,
  type: String,
  placeholder: String,
  modelValue: String,
  required: Boolean,
  error: String,
});

// Definimos los eventos que se pueden emitir desde el componente
const emit = defineEmits(['update:modelValue']);

// Función para manejar la actualización del valor del input
function updateValue(event) {
  emit('update:modelValue', event.target.value);
}

// Función para cerrar el modal
const closeModal = () => {
  // Lógica para cerrar el modal
  console.log('Modal closed');
};

// Función para cancelar la eliminación
const cancelDelete = () => {
  // Lógica para cancelar la eliminación
  console.log('Deletion canceled');
};

// Función para confirmar la eliminación
const confirmDelete = () => {
  // Lógica para confirmar la eliminación
  console.log('Event deleted');
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
        <div class="flex flex-col items-start gap-1.5 w-full">
          <label :for="id" class="text-grey text-sm font-semibold font-rubik">
            {{ label }}
            <span v-if="required" class="text-red">*</span>
          </label>
        </div>
        <button @click="cancelDelete" class="px-4 py-1 bg-purple-200 text-sm font-bold uppercase text-grey rounded-full">CANCEL</button>
        <button @click="confirmDelete" class="px-4 py-1 bg-peach-500 text-sm font-bold uppercase text-purple-700 rounded-full">DELETE</button>
      </div>
    </div>
  </div>
</template>
