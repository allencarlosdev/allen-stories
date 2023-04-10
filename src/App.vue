<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div class="container">
    <HeaderComponent />
    <transition>
      <RouterView></RouterView>
    </transition>
    <FooterComponent />
  </div>
</template>

<style>
/* Transition animations */
.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* Transition left to right */
.v-enter-active .image__bush--left,
.v-leave-active .image__bush--left {
  transition: all 2s ease-in-out;
}

.v-enter-from .image__bush--left,
.v-leave-to .image__bush--left {
  transform: translateX(-20rem);
  opacity: 0;
}

/* Transition right to left */
.v-enter-active .image__bush--right,
.v-leave-active .image__bush--right {
  transition: all 2s ease-in-out;
}

.v-enter-from .image__bush--right,
.v-leave-to .image__bush--right {
  transform: translateX(20rem);
  opacity: 0;
}

/* Transition up to down */
.v-enter-active .stories,
.v-leave-active .stories {
  transition: all 2s ease-in-out;
}

.v-enter-from .stories,
.v-leave-to .stories {
  transform: translateY(-20rem);
  opacity: 0;
}
/* container */
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}

@media screen and (max-width: 1000px) {
  .container {
    min-height: auto;
  }
}
</style>
