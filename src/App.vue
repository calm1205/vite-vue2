<script>
import { Header, SideMenu } from "@/components/molecules/index.js"

export default {
  components: {
    Header,
    SideMenu,
  },
}
</script>

<template>
  <div>
    <Header></Header>
    <div class="headerArea"></div>
    <div class="wrapper">
      <SideMenu></SideMenu>
      <div class="content">
        <h1>main contents</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/index.scss";

h1 {
  color: $COLOR_PRIMARY;
}

.headerArea {
  height: 48px;
  width: 100%;
}
.wrapper {
  display: flex;
}
.content {
  width: 100%;
  padding: 20px;
}
</style>
