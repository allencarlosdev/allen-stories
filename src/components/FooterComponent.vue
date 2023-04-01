<template>
  <footer class="footer">
    <p>
      Programmed by:
      <a
        class="footer__a"
        href="https://github.com/allencarlosdev"
        target="_blank"
        rel="noopener noreferrer"
        >Carlos Allen 😎👍</a
      >
    </p>
  </footer>
</template>
<script>
export default {
  name: 'FooterComponent',
}
</script>
<style scoped>
/* Footer */
footer {
  background-color: var(--background-footer);
  width: 100%;
  height: 10vh;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--letter-color);
}
.footer__a {
  color: var(--letter-link);
}
</style>
