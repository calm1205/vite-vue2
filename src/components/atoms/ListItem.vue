<script>
export default {
  props: ["name", "to"],
}
</script>

<template>
  <li>
    <span class="material-icons">arrow_right</span>
    <router-link :to="to">
      <span class="material-icons-outlined">folder</span>
      <span class="file_name">{{ name }}</span>
    </router-link>
  </li>
</template>

<style lang="scss" scoped>
li {
  display: flex;
  align-items: center;
  color: $COLOR_WHITE;
}

a {
  display: flex;
  align-items: center;
  gap: 5px;
}

span {
  font-size: 1rem;
}
</style>
