<script setup>
import { ref } from 'vue';
import FormField from '@/components/base/FormField.vue';
import Button from '@/components/base/Button.vue';

const username = ref('');
const password = ref('');

async function handleLogin(event) {
  event.preventDefault();

  console.log(username.value, password.value);
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
          placeholder="Please enter your username"
          v-model="username"
        />
        
        <FormField
          id="password"
          label="Password"
          type="password"
          placeholder="Please enter your password"
          v-model="password"
        />
      </div>
  
      <Button type="submit" label="Sign in" />
  
    </form>

</template>

<style lang="scss" scoped>

</style>