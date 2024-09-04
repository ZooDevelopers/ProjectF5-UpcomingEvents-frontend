<script setup>
import { ref } from 'vue'
import SignInForm from './SignInForm.vue'
import SignUpForm from './SignUpForm.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import modalBackgroundImage from '../../assets/images/events-form-img.jpg'

const currentForm = ref('login-form')
const emit = defineEmits(['close'])

function switchForm(form) {
    currentForm.value = form
}

const closeModal = () => {
    emit('close')
}
</script>

<template>
  <div class="fixed z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 ">
    <div class="w-full max-w-[1080px] relative grid md:grid-cols-10 mx-4 md:mx-16 bg-purple-700 rounded-[20px] max-h-[90vh] overflow-y-auto">
      <div class="hidden md:flex w-full md:col-span-5 lg:col-span-6 bg-center bg-cover bg-no-repeat rounded-l-[20px]" :style="{ backgroundImage: `url(${modalBackgroundImage})` }">
      </div>
      
      <div class="md:col-span-5 lg:col-span-4 px-10 py-10 bg-purple-700 flex-col justify-start items-start gap-10 inline-flex rounded-[20px]">
        <component :is="currentForm === 'login-form' ? SignInForm : SignUpForm" @register-success="closeModal" :closeModal="closeModal" />
    
        <div v-if="currentForm === 'login-form'" class="flex flex-wrap items-baseline gap-1.5">
          <span class="text-grey text-lg font-normal font-inter leading-normal">Don't have an account?</span>
          <button @click="switchForm('register-form')" class="text-peach-500 hover:text-peach-200 text-base font-bold font-rubik uppercase tracking-wide">Sign Up</button>
        </div>
        <div v-else class="flex flex-wrap items-baseline gap-1.5">
          <span class="text-grey text-lg font-normal font-inter leading-normal">Have an account?</span>
          <button @click="switchForm('login-form')" class="text-peach-500 hover:text-peach-200 text-base font-bold font-rubik uppercase tracking-wide">Login</button>
        </div>
      </div>
    
      <div class="w-10 h-10 right-5 top-5 flex items-center justify-center bg-purple-500 rounded-[20px] absolute cursor-pointer" @click="closeModal">
        <FontAwesomeIcon :icon="faTimes" class="text-xl text-peach-500 hover:text-peach-200" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos personalizados aquí */
</style>
