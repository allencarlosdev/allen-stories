<template>
  <div class="container-stories">
    <StoriesListComponent class="stories" />
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
  height: 80vh;
}
</style>
