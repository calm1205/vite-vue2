<script>
import { mapState, mapMutations } from "vuex"

export default {
  computed: {
    ...mapState({
      count: "count",
    }),
    doubleCount() {
      return this.$store.getters.doubleCount
    },
  },
  methods: {
    ...mapMutations({
      increment: "increment",
      decrement: "decrement",
      reset: "reset",
    }),
  },
}
</script>

<template>
  <div class="wrap">
    <ul>
      <li>count: {{ count }}</li>
      <li>doubleCount: {{ doubleCount }}</li>
    </ul>

    <section>
      <button @click="increment">increment</button>
      <button @click="decrement">decrement</button>
      <button @click="reset">reset</button>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  margin-top: 30px;
}

section {
  display: flex;
  gap: 10px;
}
button {
  padding: 5px;
  color: $COLOR_WHITE;
  background-color: $COLOR_PRIMARY;
  border-radius: 5px;
  border: none;
}
</style>
