<template>
  <header class="header">
    <ul class="header__social">
      <li class="header__link">
        <a
          rel="noopener noreferrer"
          href="https://github.com/allencarlosdev"
          target="_blank"
          title="link of github"
          ><i class="fa fa-github"></i
        ></a>
      </li>
      <li class="header__link">
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/allencarlosdev/"
          target="_blank"
          title="link of linkedin"
          ><i class="fa fa-linkedin"></i
        ></a>
      </li>
      <li class="header__link">
        <a
          rel="noopener noreferrer"
          href="https://stackoverflow.com/users/16209550/carlos-allen"
          target="_blank"
          title="link of  stackoverflow"
          ><i class="fa fa-stack-overflow"></i
        ></a>
      </li>
      <li class="header__link">
        <a
          rel="noopener noreferrer"
          href="https://www.sololearn.com/profile/20725585"
          target="_blank"
          title="link of sololearn"
          ><i class="fab fa-stripe-s"></i
        ></a>
      </li>
    </ul>
  </header>
</template>
<script>
export default {
  name: 'HeaderComponent',
}
</script>
<style scoped>
/* header */
header {
  background-color: var(--background-header);
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header__social {
  display: flex;
  justify-content: center;
  color: var(--letter-color);
}

.header__link {
  font-size: 2.5rem;
  margin: 0 1.5rem;
  position: relative;
}

.header__link::after {
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

.header__link:hover::after {
  transform: scale(1, 1);
}

@media screen and (max-width: 550px) {
  .header {
    height: 4rem;
  }
  .header__link {
    font-size: 1.5rem;
    margin: 0 1rem;
  }
}
</style>
