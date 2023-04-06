<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div class="container">
    <HeaderComponent />
    <RouterView></RouterView>
    <FooterComponent />
  </div>
</template>

<style>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

@media screen and (max-width: 1000px) {
  .container {
    min-height: auto;
  }
}
</style>
