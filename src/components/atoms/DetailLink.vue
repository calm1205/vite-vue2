<script>
export default {
  props: ["text", "to"],
}
</script>

<template>
  <router-link :to="to ? to : '#'">
    <div>
      <span>{{ text }}</span>
      <span class="material-icons-outlined"> chevron_right </span>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
}
span {
  font-size: 0.9rem;
}
.material-icons-outlined {
  font-size: 1.4rem;
}
</style>
