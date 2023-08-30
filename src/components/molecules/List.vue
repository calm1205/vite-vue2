<script>
import { ListItem } from "@/components/atoms/index.js"

export default {
  props: ["items"],
  components: {
    ListItem,
  },
}
</script>

<template>
  <ul>
    <template v-for="(value, key) in items">
      <ListItem :name="value" :to="key" :key="key" />
    </template>
  </ul>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
}
</style>
