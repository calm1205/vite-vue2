<script>
import { List } from "@/components/molecules/index.js"
import { SIDE_MENU } from "../../constants/dummy"

export default {
  components: {
    List,
  },
  created() {
    this.SIDE_MENU = SIDE_MENU
  },
}
</script>

<template>
  <div class="wrapper">
    <span> All files </span>
    <List :items="SIDE_MENU" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 240px;
  height: 100%;
  border-right: 1px solid gray;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

span {
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
