<script setup>
import Button from "@/components/base/Button.vue";
import { ref } from "vue";
import FormField from "./base/FormField.vue";

const form = ref({
  title: "",
  date: "",
  time: "",
  spots: 0,
  location: "",
  image: null,
  description: "",
  isFeatured: false,
});
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  form.value.image = file;
};
const submitForm = () => {
  console.log("Form data:", form.value);

};
const cancel = () => {

  console.log("Cancel");
};
</script>

<template>
  <div class="bg-purple-800 max-w-lg mx-auto my-10 p-8 rounded-2xl">
    <h3 class="text-pink text-3xl font-bold font-rubik uppercase mb-6">
      Add New Event
    </h3>
    <form @submit.prevent="submitForm" class="space-y-6">
      <FormField
        id="title"
        label="Title"
        type="text"
        placeholder="Type here"
        v-model:modelValue="form.title"
        required
        class="w-full"
      />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField
          id="date"
          label="Date"
          type="date"
          v-model:modelValue="form.date"
          required
          class="w-full"
        />
        <FormField
          id="time"
          label="Time"
          type="time"
          v-model:modelValue="form.time"
          required
          class="w-full"
        />
        <FormField
          id="spots"
          label="Spots"
          type="text"
          v-model:modelValue="form.spots"
          required
          class="w-full"
        />
      </div>
      <FormField
        id="location"
        label="Location"
        type="text"
        placeholder="Type here"
        v-model:modelValue="form.location"
        required
        class="w-full"
      />
      <div class="flex flex-col gap-2">
        <label class="text-grey font-bold gap-2" for="image">Image</label>
        <input
          type="file"
          id="image"
          @change="handleFileUpload"
          class="file:bg-purple-500 file:text-peach-500 file:px-5 file:py-2 file:rounded-md file:cursor-pointer"
        />
        <p class="text-grey mt-2">
          {{ form.image ? form.image.name : "No file chosen" }}
        </p>
      </div>
      <FormField
        id="description"
        label="Description"
        type="textarea"
        placeholder="Type here"
        v-model:modelValue="form.description"
        required
        class="w-full"
      />
      <div class="flex items-center space-x-2">
        <input
          v-model="form.isFeatured"
          type="checkbox"
          id="isFeatured"
          class="form-checkbox text-pink-500"
        />
        <label for="isFeatured" class="text-grey">Event is featured</label>
      </div>
      <div class="flex justify-between mt-6">
        <button
          type="button"
          @click="cancel"
          class="px-4 py-2 bg-purple-200 font-bold uppercase text-purple-700 rounded-full"
        >
          Cancel
        </button>
        <Button
          type="submit"
          label="Add new event"
          class="px-4 py-2 bg-pink-500 text-white rounded-full"
        />
      </div>
    </form>
  </div>
</template>


<style scoped></style>
