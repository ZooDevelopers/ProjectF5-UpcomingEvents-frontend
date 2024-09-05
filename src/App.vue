<script setup>
import Header from './components/global/Header.vue'
import Footer from './components/global/Footer.vue';
</script>

<template>
  <div id="app">
    <body >
      <Header />
        <main class="content">
          <router-view /> 
      
        </main>
    <Footer />
  </body>
  </div>
</template>

<style scoped>

#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  background-color: #30283F;
}

.content {
  flex:1;
  
  
}
</style>
