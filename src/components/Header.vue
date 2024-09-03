<script setup>
import { ref } from 'vue';
import Button from '@/components/base/Button.vue';
import SignInUpModal from '@/components/auth/SignInUpModal.vue';

const isModalOpen = ref(false);
const openModal = () => {
  isModalOpen.value = true;
};
const closeModal = () => {
  isModalOpen.value = false;
};

</script>

<template>
    <header class="bg-purple-900 px-5">
      <div class="max-w-[1290px] flex justify-between items-center mx-auto py-5">
        <router-link to="/" class="">
            <img src="/src/assets/images/logo-events.svg" alt="upcoming events logo">
        </router-link>
        <Button :label="'SIGN IN'" @click="openModal" />
        <SignInUpModal v-if="isModalOpen" @close="closeModal" />
      </div>
    </header>
  </template>

<style scoped>


</style>