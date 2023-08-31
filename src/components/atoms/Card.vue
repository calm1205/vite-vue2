<script>
export default {
  props: ["text", "to"],
}
</script>

<template>
  <router-link :to="to ? to : '#'">
    <div>{{ text }}</div>
  </router-link>
</template>

<style lang="scss" scoped>
div {
  width: fit-content;
  max-width: 100px;
  font-size: 0.9rem;
  padding: 2px 4px;
  color: $COLOR_PRIMARY;
  border: 1px solid $COLOR_PRIMARY;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
