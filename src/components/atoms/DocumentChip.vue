<script>
export default {
  props: ["text", "to"],
}
</script>

<template>
  <router-link :to="to ? to : '#'">
    <div>
      <span class="material-icons"> description </span>
      <span>{{ text }}</span>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  :hover {
    color: $COLOR_LIGHT_PRIMARY;
  }
}
span {
  font-size: 1rem;
}
.material-icons {
  font-size: 1.2rem;
}
</style>
