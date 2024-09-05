<!-- EditEventForm.vue -->
<script setup>
import { ref } from 'vue';
import Button from '../components/base/Button.vue';
import FormField from '../components/base/FormField.vue';

const form = ref({
  title: '',
  date: '',
  time: '',
  spots: 0,
  location: '',
  image: null,
  description: '',
  isFeatured: false,
});

const handleImageUpload = (event) => {
  form.value.image = event.target.files[0];
};

const saveEdits = () => {
  console.log('Edits saved', form.value);
};

const cancelEdit = () => {
  console.log('Edit canceled');
};

const closeModal = () => {
  console.log('Modal closed');
};
</script>

<template>
  <div class="fixed inset-0 bg-black/70 bg-opacity-10 flex items-center justify-center">
    <div class="bg-purple-800 text-pink font-rubik p-6 rounded-lg w-96">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold text-pink-200">EDIT EVENT</h2>
        <button @click="closeModal" class="text-pink-200 text-xl">&times;</button>
      </div>

      <form @submit.prevent="saveEdits">
        <FormField 
          id="title" 
          label="Title" 
          type="text" 
          v-model="form.title" 
          placeholder="Event title placeholder" 
          required 
        />

        <div class="grid grid-cols-3 gap-4 mb-4">
          <FormField 
            id="date" 
            label="Date" 
            type="date" 
            v-model="form.date" 
            required 
          />
          <FormField 
            id="time" 
            label="Time" 
            type="time" 
            v-model="form.time" 
            required 
          />
          <FormField 
            id="spots" 
            label="Spots" 
            type="number" 
            v-model="form.spots" 
            required 
          />
        </div>

        <FormField 
          id="location" 
          label="Location" 
          type="text" 
          v-model="form.location" 
          placeholder="Barcelona, Concert Hall" 
          required 
        />

        <div class="mb-4">
          <label for="image" class="block text-sm text-grey font-rubik font-semibold">Image</label>
          <input 
            type="file" 
            id="image" 
            @change="handleImageUpload" 
            class="file:bg-purple-500 file:text-peach-500 file:px-5 file:py-2 file:rounded-md file:cursor-pointer"
          />
          <div v-if="form.image" class="mt-2 text-xs text-pink-20">{{ form.image.name }}</div>
        </div>

        <div class="mb-4">
          <label for="description" class="block text-sm text-grey font-rubik font-semibold">Description</label>
          <textarea 
            id="description" 
            v-model="form.description" 
            class="w-full mt-1 p-15 rounded bg-purple-500 font-semibold font-rubik text-white focus:outline-none" 
            rows="4"
          ></textarea>
        </div>

        <div class="flex items-center mb-4">
          <input 
            type="checkbox" 
            id="isFeatured" 
            v-model="form.isFeatured" 
            class="mr-2"
          />
          <label for="isFeatured" class="text-sm text-grey">Event is featured</label>
        </div>

        <div class="flex justify-end">
          <Button label="CANCEL" @click="cancelEdit" class="px-4 py-2 bg-purple-200 font-bold uppercase text-purple-700 rounded-full"/>
          <Button label="SAVE EDITS" class="ml-4" type="submit" />
        </div>
      </form>
    </div>
  </div>
</template>
