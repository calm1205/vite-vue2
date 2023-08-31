<script>
import { Card, DocumentChip, Input } from "@/components/atoms/index.js"

export default {
  components: {
    Card,
    DocumentChip,
    Input,
  },
}
</script>

<template>
  <div>
    <h1>01 締結版データ</h1>
    <Card text="共通" />
    <Card text="hello world hello world" />
    <DocumentChip text="契約書.pdf" />
    <div class="inputWrap">
      <Input placeholder="Search freely by keyword." />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inputWrap {
  width: 200px;
}
</style>
