<script>
import { Logo } from "@/components/atoms/index.js"
import { COLOR } from "@/constants/styles.js"

export default {
  components: {
    Logo,
  },
  data: function () {
    return {
      color: { white: "white" },
    }
  },
  created: function () {
    for (const [key, value] of Object.entries(COLOR)) {
      this[key] = value
    }
  },
}
</script>

<template>
  <div class="wrapper">
    <Logo></Logo>
    {{ color2 }}
    <div class="menu">
      <span>データベース</span>
      <span>契約管理</span>
      <span>案件管理</span>
      <span>自動ドラフティング</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 20px;
  background-color: v-bind(primary);
}

.menu {
  display: flex;
  gap: 20px;
  font-size: 14px;
  span {
    color: v-bind(white);
  }
}
</style>
