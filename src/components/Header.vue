<script setup>

</script>

<template>
    <header class="header">
      <div class="logo-container">
        <router-link to="/" class="logo-link">
            <img src="/src/assets/images/OBJECTS.png" alt="">
          <h1>All Events</h1>
          
        
        </router-link>
      </div>
      <div class="actions">
        <router-link to="/login" class="login-button">SIGN IN</router-link>
      </div>
    </header>
  </template>

<style scoped>

.header {
  width: 100%; 
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #251F30; 
  padding: 20px 80px;
  color:#ECBDF2 ;
  font-family: 'Arial', sans-serif;
  box-sizing: border-box; 
}

.logo-container {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: flex-start; 
  flex: 1;
  margin-left: 100px; 
  font-size: 24px;
}

.logo-container img {
  height: 50px; 
  margin-top: 10%;
} 

.actions {
  display: flex;
  justify-content: flex-end; 
  align-items: center; 
  flex: 1;
}

.login-button {
  background-color: #f8aaa3; 
  color: #1F1C2F; 
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none; 
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #fa8c82; 
}





</style>