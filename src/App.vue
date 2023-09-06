<script>
import { Header } from "@/components/molecules/index.js"
import { SideMenu } from "@/components/organisms/index.js"

export default {
  components: {
    Header,
    SideMenu,
  },
}
</script>

<template>
  <div class="wrapper">
    <Header />
    <div class="headerArea"></div>
    <div class="underHeader">
      <SideMenu />
      <div class="content">
        <h1>main contents</h1>
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
