<template>
  <main>
    <div class="image">
      <img
        class="image__bush image__bush--left"
        src="../assets/img/bush-left-animated.svg"
        alt="Bush Left"
      />
      <img
        class="image__bush image__bush--right"
        src="../assets/img/bush-right-animated.svg"
        alt="Bush right"
      />
      <div class="btn">
        <button class="btn__stories">
          <RouterLink to="/stories">Stories</RouterLink>
        </button>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: 'HomeView',
}
</script>
<style scoped>
/* image */
.image {
  width: 100%;
  height: 80vh;
  background-image: url('img/background-stories-allen.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.image__bush {
  width: 30%;
  position: absolute;
  z-index: 1;
}

.image__bush--left {
  bottom: 0;
  left: 0;
}

.image__bush--right {
  bottom: 0;
  right: 0;
}

/* Button */
.btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn__stories {
  background-color: var(--background-header);
  cursor: pointer;
  border: none;
  padding: 1rem 4rem;
  color: var(--letter-color);
  font-size: 1.5rem;
  font-weight: bold;
  position: relative;
  border-radius: 0.75rem;
}
.btn__stories::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: 120%;
  height: 130%;
  background: linear-gradient(
    45deg,
    red,
    cyan,
    deeppink,
    cyan,
    red,
    cyan,
    deeppink,
    cyan
  );
  background-size: 800%;
  border-radius: 1rem;
  filter: blur(0.5rem);
  animation: glowing 20s linear infinite;
}
@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.btn__stories::after {
  position: absolute;
  content: '';
  bottom: -0.625rem;
  left: 0;
  height: 0.188rem;
  width: 100%;
  background: var(--letter-link);
  border-radius: 0.313rem;
  transform: scale(0, 1);
  transition: 0.5s;
}

.btn__stories:hover::after {
  transform: scale(1, 1);
}

/* main */
main {
  background-color: var(--background-body);
}
</style>
