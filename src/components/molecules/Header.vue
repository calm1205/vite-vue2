<script>
import { Logo } from "@/components/atoms/index.js"

export default {
  components: { Logo, },
}
</script>

<template>
  <div>
    <div class="wrapper">
      <Logo></Logo>
      <div class="menu">
        <span>データベース</span>
        <span>契約管理</span>
        <span>案件管理</span>
        <span>自動ドラフティング</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 20px;
  background-color: $COLOR_PRIMARY;
}

.menu {
  display: flex;
  gap: 20px;
  font-size: 14px;

  span {
    color: $COLOR_WHITE;
  }
}
</style>
