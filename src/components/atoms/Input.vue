<script>
export default {
  props: ["id", "name", "placeholder"],
}
</script>

<template>
  <input :id="id" :name="name" :placeholder="placeholder" />
</template>

<style lang="scss" scoped>
input {
  width: 100%;
  padding: 10px;
  border-radius: 9999px;
  border: 1px solid $COLOR_PRIMARY;

  &::placeholder {
    color: $COLOR_PLACEHOLDER;
    letter-spacing: 0.04rem;
  }
}
</style>
