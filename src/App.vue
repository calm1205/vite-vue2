<script>
import { ListItem } from "@/components/atoms/index.js"
import { Header } from "@/components/molecules/index.js"
import { SideMenu } from "@/components/organisms/index.js"

export default {
  components: {
    ListItem,
    Header,
    SideMenu,
  },
}
</script>

<template>
  <div class="wrapper">
    <Header></Header>
    <div class="headerArea"></div>
    <div class="underHeader">
      <SideMenu></SideMenu>
      <div class="content">
        <h1>main contents</h1>
        <ListItem name="aaa" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/index.scss";

.wrapper {
  height: 100vh;
}

h1 {
  color: $COLOR_PRIMARY;
}

.headerArea {
  height: 48px;
  width: 100%;
}

.underHeader {
  display: flex;
  height: calc(100vh - 48px);
}

.content {
  width: 100%;
  padding: 20px;
}
</style>
