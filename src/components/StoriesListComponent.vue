<template>
  <div class="list">
    <ul class="list__ul">
      <li class="list__li" v-for="story in stories" :key="story.id">
        <RouterLink
          class="list__card"
          :to="{
            name: 'StoryView',
            params: { id: story.id },
          }"
          name="carlos"
        >
          <img class="list__img" :src="story.url" alt="image 1" />
          <h3 class="list__title">{{ story.title }}</h3>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'StoriesListComponent',
  data() {
    return {
      stories: [],
    }
  },
  async created() {
    const response = await fetch(
      'https://api-allen-stories.000webhostapp.com/api/stories',
    )
    if (response.ok) {
      const storiesData = await response.json()
      this.stories = storiesData
    } else {
      alert('Error HTTP' + response.status)
    }
  },
}
</script>
<style scoped>
.list {
  width: 100%;
  height: 80vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.list__ul {
  position: absolute;
  width: 80%;
  height: 100%;
  padding: 2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, minmax(min(10rem, 100%), 1fr));
  grid-auto-rows: minmax(100%, 45rem);
}

.list__li {
  box-shadow: 0.125rem 0.125rem 0.375rem 0 var(--background-letter);
  border-radius: 1.25rem;
  text-align: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.list__card {
  position: relative;
  display: flex;
  width: 100%;
}
.list__img {
  width: 100%;
  border-radius: 1.25rem;
  transition: 1s;
}

.list__title {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  background-color: var(--background-letter);
  color: var(--letter-color);
  font-size: 1.5rem;
  font-weight: bold;
  width: 100%;
  height: 5rem;
}

.list__img:hover {
  transform: scale(1.3);
  transition: 0.5s;
  cursor: pointer;
}
</style>
