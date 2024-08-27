<script setup>
import { ref } from 'vue';
import FormField from '@/components/base/FormField.vue';
import Button from '@/components/base/Button.vue';

const username = ref('');
const email = ref('');
const confirmEmail = ref('');
const password = ref('');
const confirmPassword = ref('');

const emailError = ref('');
const passwordError = ref('');

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
        console.log({
        username: username.value,
        email: email.value,
        confirmEmail: confirmEmail.value,
        password: password.value,
        confirmPassword: confirmPassword.value
      });

      // TODO: sign up logic 
    }
}
</script>

<template>
      <div class="w-full flex flex-col items-start gap-2.5">
    <h3 class="text-pink text-4xl font-bold font-rubik uppercase leading-tight">Sign Up!</h3>
    <p class="text-grey text-base font-normal font-inter leading-normal">Create your Account</p>
  </div>

  <form @submit="handleSignUp" class="w-full flex flex-col items-start gap-8">
    <div class="w-full flex flex-col items-start gap-5">
      <FormField
        id="username"
        label="Username"
        type="text"
        placeholder="Enter your username"
        v-model="username"
      />

      <FormField
        id="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        v-model="email"
        :error="emailError"
      />

      <FormField
        id="confirm-email"
        label="Confirm Email"
        type="email"
        placeholder="Confirm your email"
        v-model="confirmEmail"
        :error="emailError"
      />

      <FormField
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        v-model="password"
        :error="passwordError"
      />

      <FormField
        id="confirm-password"
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        v-model="confirmPassword"
        :error="passwordError"
      />
    </div>

    <Button type="submit" label="Sign Up" />
  </form>
</template>