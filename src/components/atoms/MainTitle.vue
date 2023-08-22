<script>
export default {
  props: ["name"],
  data() {
    return {
      message: "hello",
    }
  },
}
</script>

<template>
  <div>
    <h1 :class="name" :data-test="message">
      <slot>good</slot>
    </h1>
  </div>
</template>

<style scoped>
h1 {
  color: blue;
}
</style>
