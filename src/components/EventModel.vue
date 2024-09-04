<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/base/Button.vue';
import { ref, watch } from 'vue';

// Props que recibirá el componente
const props = defineProps({
  showModal: Boolean,
  event: Object,
});

const emits = defineEmits(['close']);

// Función para cerrar el modal
const closeModal = () => {
  emits('close');
};
</script>

<template>
  <!-- Modal Pop-up -->
  <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50" @click.self="closeModal">
    <div class="relative bg-purple-900 text-white p-6 rounded-lg w-full max-w-lg mx-4 sm:mx-0">
      <!-- Botón de cierre en la esquina superior derecha -->
      <div class="w-10 h-10 right-5 top-5 flex items-center justify-center bg-purple-500 rounded-[20px] absolute cursor-pointer" @click="closeModal">
        <FontAwesomeIcon :icon="faTimes" class="text-xl text-peach-500 hover:text-peach-200" />
      </div>
      <!-- Contenido del Modal -->
      <img :src="event?.getImgUrl()" alt="Event Image" class="w-full h-48 object-cover rounded-lg mb-4" />
      <h2 class="text-2xl text-peach-500 mt-0">{{ event?.getTitle() }}</h2>
      <p class="leading-6 mb-4">{{ event?.getDescription() }}</p>
      <div class="text-base text-grey-300 mb-2">
        <span><i class="fas fa-map-marker-alt"></i> {{ event?.getLocation() }}</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-base text-grey-300"><i class="fas fa-user"></i> Spots Left: {{ event?.getMaxparticipants() }}</span>
        <Button label="Join Event" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Puedes agregar estilos personalizados aquí si es necesario */
</style>
