<script>
export default {
  props: ["name"],
}
</script>

<template>
  <li>
    <span class="material-icons">arrow_right</span>
    <div>
      <span class="material-icons-outlined">folder</span>
      <span>{{ name }}</span>
    </div>
  </li>
</template>

<style lang="scss" scoped>
li {
  display: flex;
  align-items: center;
}

div {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>