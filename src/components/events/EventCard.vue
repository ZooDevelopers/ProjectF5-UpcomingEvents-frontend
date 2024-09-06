<script setup>
import { defineProps, defineEmits } from 'vue';
import Button from '@/components/base/Button.vue';

const props = defineProps({
  eventData: Object,
});

const emit = defineEmits(['openModal']);

const handleOpenModal = () => {
  emit('openModal', props.eventData);
};

const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
};
</script>

<template>
  <div class="demo flex flex-col w-full mx-auto bg-purple-600 text-white shadow-lg rounded-[20px] overflow-hidden">
    <div class="cursor-pointer" @click="handleOpenModal">
      <img :src="eventData.imgUrl" alt="Event Image" class="w-full h-48 object-cover" />
    </div>
    <div class="p-4">
      <div class="flex justify-between items-center text-sm text-grey-300 mb-2">
        <span><i class="far fa-calendar-alt"></i> {{ eventData.date }}</span>
        <span><i class="far fa-clock"></i> {{ eventData.time }}</span>
      </div>
      <h3 class="text-lg text-peach-500 mx-0 my-2">{{ eventData.title }}</h3>
      <p class="text-base text-grey-300 mb-4">{{ truncateText(eventData.description, 30) }}</p>
      <div class="text-base text-grey-300 mb-2">
        <span><i class="fas fa-map-marker-alt"></i> {{ eventData.location }}</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-base text-grey-300"><i class="fas fa-user"></i> Spots Left: {{ eventData.maxparticipants }}</span>
        <Button label="Join Event" />
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>
