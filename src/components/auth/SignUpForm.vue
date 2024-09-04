<script setup>
import { ref } from 'vue';
import FormField from '@/components/base/FormField.vue';
import Button from '@/components/base/Button.vue';
import { useAuthStore } from '@/stores/login'; // Importar el store de autenticación

const username = ref('');
const email = ref('');
const confirmEmail = ref('');
const password = ref('');
const confirmPassword = ref('');

const emailError = ref('');
const passwordError = ref('');

const props = defineProps(['closeModal']); // Recibir la función para cerrar el modal

function validateEmail() {
  if (email.value !== confirmEmail.value) {
    emailError.value = 'Emails do not match';
  } else {
    emailError.value = '';
    return true;
  }
}

function validatePassword() {
  if (password.value !== confirmPassword.value) {
    passwordError.value = 'Passwords do not match';
  } else {
    passwordError.value = '';
    return true;
  }
}

async function handleSignUp(event) {
  event.preventDefault();
  
  if (!validateEmail() || !validatePassword()) {
    return;
  }

  try {
    await useAuthStore().register(username.value, password.value, email.value);

    if (useAuthStore().isAuthenticated) {
      props.closeModal(); // Llama a la función pasada como prop para cerrar el modal
    } else {
      alert('Registration failed: ' + useAuthStore().errorMessage);
    }
  } catch (error) {
    console.error('Registration error:', error);
  }
}
</script>

<template>
  <div class="w-full flex flex-col items-start gap-2.5">
    <h3 class="text-pink text-4xl font-bold font-rubik uppercase leading-tight">Sign Up!</h3>
    <p class="text-grey text-base font-normal font-inter leading-normal">Create your Account</p>
  </div>

  <form @submit="handleSignUp" class="w-full flex flex-col items-start gap-8">
    <div class="w-full flex flex-col items-start gap-4">
      <FormField
        id="username"
        label="Username"
        type="text"
        placeholder="Enter your username"
        :required="true"
        v-model="username"
      />

      <FormField
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        :required="true"
        v-model="password"
        :error="passwordError"
      />

      <FormField
        id="confirm-password"
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        :required="true"
        v-model="confirmPassword"
        :error="passwordError"
      />

      <FormField
        id="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        :required="true"
        v-model="email"
        :error="emailError"
      />

      <FormField
        id="confirm-email"
        label="Confirm Email"
        type="email"
        placeholder="Confirm your email"
        :required="true"
        v-model="confirmEmail"
        :error="emailError"
      />
    </div>

    <Button type="submit" label="Sign Up" />
  </form>
</template>

<style scoped>
/* Estilos personalizados aquí */
</style>
