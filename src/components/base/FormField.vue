<script setup>
    import { defineProps, defineEmits } from 'vue';

    const props = defineProps({
    id: String,
    label: String,
    type: String,
    placeholder: String,
    modelValue: String,
    error: String,
    });

    const emit = defineEmits(['update:modelValue']);

    function updateValue(event) {
    emit('update:modelValue', event.target.value);
    }
</script>

<template>
    <div class="flex flex-col items-start gap-2 w-full">
      <label :for="id" class="text-grey text-sm font-semibold font-rubik">
        {{ label }}
      </label>
      <input 
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateValue"
        class="w-full p-4 bg-purple-500 text-purple-200 text-lg font-normal font-inter rounded-lg border-2 border-transparent focus:border-pink hover:border-pink focus:text-grey placeholder:text-purple-200 cursor-pointer"
      />
      <p v-if="error" class="text-red text-sm font-normal font-inter">{{ error }}</p>
    </div>
</template>
  

  