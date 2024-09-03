    <script setup>
  import { ref } from 'vue';
  import Button from '@/components/base/Button.vue';
  
  // Estado reactivo para controlar la visibilidad del modal
  const showModal = ref(false);
  </script>

<template>
    <div class="flex flex-col w-[500px] overflow-hidden shadow-lg bg-purple-800 text-white cursor-pointer rounded-lg">
      <!-- Imagen del evento con click handler para mostrar el modal -->
      <div class="cursor-pointer" @click="showModal = true">
        <img src="https://via.placeholder.com/600x300" alt="Event Image" class="w-full h-[200px] object-cover" />
      </div>
      <!-- Contenido de la tarjeta -->
      <div class="p-4">
        <!-- Fecha y hora del evento -->
        <div class="flex justify-between items-center text-sm text-grey-300 mb-2">
          <span><i class="far fa-calendar-alt"></i> 20/09/2024</span>
          <span><i class="far fa-clock"></i> 21:00</span>
        </div>
        <!-- Título del evento -->
        <h3 class="text-lg text-peach-500 mx-0 my-2">EVENT TITLE PLACEHOLDER</h3>
        <!-- Descripción del evento -->
        <p class="text-base text-grey-300 mb-4">
          Lorem ipsum dolor sit amet consectetur. Est mi consectetur mauris eget neque eu sed quam malesuada. Massa Lorem ipsum dolor sit amet consectetur. Est mi consectetur mauris ...
        </p>
        <!-- Ubicación del evento y Spots Left -->
        <div class="text-base text-grey-300 mb-2">
          <span><i class="fas fa-map-marker-alt"></i> Barcelona, Concert Hall</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-base text-grey-300"><i class="fas fa-user"></i> Spots Left: 20</span>
          <!-- Botón para unirse al evento -->
          <Button label="Join Event" />
        </div>
      </div>
  
      <!-- Modal Pop-up -->
      <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50" @click.self="showModal = false">
        <div class="relative bg-purple-900 text-white p-6 rounded-lg w-full max-w-lg mx-4 sm:mx-0">
          <!-- Botón de cierre en la esquina superior derecha -->
          <button @click="showModal = false" class="absolute top-2 right-2 text-white">
            <i class="fas fa-times"></i>
          </button>
          <img src="https://via.placeholder.com/600x300" alt="Event Image" class="w-full h-[200px] object-cover rounded-lg mb-4" />
          <h2 class="text-2xl text-peach-500 mt-0">EVENT TITLE PLACEHOLDER</h2>
          <p class="leading-6 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit ultrices magna, at vestibulum enim vehicula ut. Duis volutpat pharetra malesuada. Donec vel nisi vitae justo volutpat pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam quis arcu non risus tristique ultricies. Curabitur a magna ut est scelerisque euismod a et tortor. Nulla facilisi. Sed malesuada scelerisque arcu, vel convallis nulla auctor vitae. Curabitur fermentum, felis nec suscipit condimentum, neque sapien dignissim felis, ut volutpat lorem sapien ac lorem. Suspendisse ac eros eget arcu posuere sollicitudin at a mi.
          </p>
          <div class="text-base text-grey-300 mb-2">
          <span><i class="fas fa-map-marker-alt"></i> Barcelona, Concert Hall</span>
        </div>
          <div class="flex justify-between items-center">
          <span class="text-base text-grey-300"><i class="fas fa-user"></i> Spots Left: 20</span>
          <!-- Botón para unirse al evento -->
          <Button label="Join Event" />
        </div>
        </div>
      </div>
    </div>
  </template>

  
  <style scoped>
  /* No es necesario aplicar estilos adicionales ya que estamos utilizando clases de Tailwind CSS directamente en los elementos */
  </style>
  