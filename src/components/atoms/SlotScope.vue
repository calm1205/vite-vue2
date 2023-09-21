<script>
export default {
  data() {
    return {
      userName: {
        japanese: "山田太郎",
        english: "Taro Yamada",
      },
    }
  },
}
</script>

<template>
  <h1>
    name:
    <slot name="scope" :userName="userName">
      {{ userName.japanese }}
    </slot>
  </h1>
</template>

<style scoped>
h1 {
  font-size: 24px;
}
</style>
