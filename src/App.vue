<script>
import MainTitle from "@/components/atoms/MainTitle.vue"
import { Header } from "@/components/molecules/index.js"

export default {
  components: {
    MainTitle,
    Header,
  },
}
</script>

<template>
  <div>
    <Header>kk</Header>
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
