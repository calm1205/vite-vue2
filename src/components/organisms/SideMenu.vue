<script>
import { List } from "@/components/molecules/index.js"
import { SIDE_MENU_LIST } from "../../constants/dummy"

export default {
  components: {
    List
  },
  created() {
    this.SIDE_MENU_LIST = SIDE_MENU_LIST
  }
}
</script>

<template>
  <div class="wrapper">
    <span> All files </span>
    <List :names="SIDE_MENU_LIST" />
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
  gap: 20px;
}

span {
  font-weight: bold;
}
</style>
