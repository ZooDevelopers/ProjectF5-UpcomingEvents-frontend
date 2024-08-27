<template>
    <button class="flex items-center justify-center px-9 py-4 bg-peach-500 hover:bg-peach-300 rounded-full cursor-pointer">
      <span class="text-[15px] font-bold uppercase tracking-wide text-purple-700 font-rubik text-center">
        {{ label }}
      </span>
    </button>
</template>
  
<script setup>
  defineProps({
    label: String
  })
</script>