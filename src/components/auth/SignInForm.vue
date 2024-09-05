<script setup>
import { ref } from 'vue';
import FormField from '@/components/base/FormField.vue';
import Button from '@/components/base/Button.vue';
import { useAuthStore } from '@/stores/login'; 
import { useRouter } from 'vue-router'; 
const username = ref('');
const password = ref('');
const authStore = useAuthStore(); 
const router = useRouter(); 

const props = defineProps(['closeModal']); 

async function handleLogin(event) {
  event.preventDefault();

  try {
    await authStore.login(username.value, password.value);

    if (authStore.isAuthenticated) {
      props.closeModal(); 
      router.push('/ManageEvents'); 
    } else {
      alert('Login failed: ' + authStore.errorMessage);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
</script>

<template>
  <div class="w-full flex flex-col items-start gap-2.5">
    <h3 class="text-pink text-4xl font-bold font-rubik uppercase leading-tight">Welcome!</h3>
    <p class="text-grey text-base font-normal font-inter leading-normal">Login to your Account</p>
  </div>

  <form @submit="handleLogin" class="w-full flex flex-col items-start gap-8">
    <div class="w-full flex flex-col items-start gap-5">
      <FormField
        id="username"
        label="Username"
        type="text"
        placeholder="Enter your username"
        v-model="username"
      />

      <FormField
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        v-model="password"
      />
    </div>

    <Button type="submit" label="Sign in" />
  </form>
</template>

<style scoped>
</style>
