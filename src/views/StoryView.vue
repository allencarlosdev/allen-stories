<template>
  <div class="container-story">
    <div class="book">
      <div class="book__border">
        <h1 class="book__h1">{{ story.title }}</h1>
        <p class="book__p">{{ story.content }}</p>
      </div>
    </div>
    <div class="image">
      <div class="image__border"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StoryView.vue',
  data() {
    return {
      story: [],
      image: '',
    }
  },
  async created() {
    const response = await fetch(
      `https://api-allen-stories.000webhostapp.com/api/stories/${this.$route.params.id}`,
    )
    if (response.ok) {
      const storyData = await response.json()
      this.story = storyData
      this.image = 'url(' + this.story.url + ')'
    } else {
      alert('Error HTTP' + response.status)
    }
  },
}
</script>
<style scoped>
.container-story {
  display: flex;
  padding: 1rem;
  width: 100%;
  height: 80vh;
}

.book {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.book__border {
  width: 90%;
  height: 100%;
  border: 1rem solid transparent;
  border-image: url('../assets/img/border-image.png') 180 180 180 180 / 11.25rem
    11.25rem 11.25rem 11.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.book__h1 {
  margin: 2rem;
  color: var(--letter-story);
  font-weight: bold;
  font-size: 2rem;
  font-family: var(--font-story);
}
.book__p {
  color: var(--letter-story);
  font-family: var(--font-story);
  text-align: justify;
  text-indent: 3rem;
  line-height: 1.2rem;
  margin: 3rem;
}
.image {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image__border {
  width: 50%;
  height: 90%;
  background-color: blue;
  background-image: v-bind(image);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1rem;
}
</style>
