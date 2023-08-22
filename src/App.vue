<script>
import MainTitle from "./components/atoms/MainTitle.vue"

export default {
  components: {
    MainTitle,
  },
}
</script>

<template>
  <div>
    <h1>hello world</h1>
    <MainTitle name="class">hello slot</MainTitle>
    <MainTitle name="class"></MainTitle>
  </div>
</template>

<style lang="scss" scoped>
@import "/index.scss";

h1 {
  color: black;
  color: $COLOR_PRIMARY;
}
</style>
