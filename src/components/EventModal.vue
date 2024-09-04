<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/base/Button.vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  showModal: Boolean,
  eventData: Object, 
});

const emits = defineEmits(['close']);

const closeModal = () => {
  emits('close');
};
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50" @click.self="closeModal">
    <div class="relative bg-purple-900 text-white p-6 rounded-lg w-full max-w-lg mx-4 sm:mx-0">

      <div class="w-10 h-10 right-5 top-5 flex items-center justify-center bg-purple-500 rounded-[20px] absolute cursor-pointer" @click="closeModal">
        <FontAwesomeIcon :icon="faTimes" class="text-xl text-peach-500 hover:text-peach-200" />
      </div>

      <img :src="props.eventData.imgUrl" alt="Event Image" class="w-full h-48 object-cover rounded-lg mb-4" />
      <h2 class="text-2xl text-peach-500 mt-0">{{ props.eventData.title }}</h2>
      <p class="leading-6 mb-4">{{ props.eventData.description }}</p>
      <div class="text-base text-grey-300 mb-2">
        <span><i class="fas fa-map-marker-alt"></i> {{ props.eventData.location }}</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-base text-grey-300"><i class="fas fa-user"></i> Spots Left: {{ props.eventData.maxparticipants }}</span>
        <Button label="Join Event" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
