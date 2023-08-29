<script>
import { ListItem } from "@/components/atoms/index.js"

export default {
  props: ["names"],
  components: {
    ListItem
  }
}
</script>

<template>
  <ul>
    <template v-for="name in names">
      <ListItem :name="name" :key="name" />
    </template>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
}

div {
  display: flex;
  align-items: center;
}
</style>