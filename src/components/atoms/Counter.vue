<script>
export default {
  data() {
    return {
      // dataだと更新を検知できないよ
      count: this.$store.state.count,
    }
  },
  computed: {
    computedCount() {
      return this.$store.state.count
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment")
    },
    decrement() {
      this.$store.commit("decrement")
    },
    reset() {
      this.$store.commit("reset")
    },
  },
}
</script>

<template>
  <div class="wrap">
    <ul>
      <li>data count: {{ count }}</li>
      <li>computed count: {{ computedCount }}</li>
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
