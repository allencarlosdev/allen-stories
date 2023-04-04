<template>
  <div class="container-stories">
    <StoriesListComponent />
  </div>
</template>
<script>
import StoriesListComponent from '../components/StoriesListComponent.vue'

export default {
  name: 'StoriesView',
  components: { StoriesListComponent },
}
</script>
<style scoped>
.container-stories {
  background-color: beige;
  height: 80vh;
}
</style>
