<script>
export default {
  props: ["name"],
}
</script>

<template>
  <div>
    <span class="material-icons">arrow_right</span>
    <span>{{ name }}</span>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
}
</style>