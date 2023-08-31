<script>
import {
  Card,
  DocumentChip,
  Input,
  DetailLink,
} from "@/components/atoms/index.js"

export default {
  components: {
    Card,
    DocumentChip,
    Input,
    DetailLink,
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
      <Input
        id="search"
        name="search"
        placeholder="Search freely by keyword."
      />
    </div>
    <DetailLink text="All details" />
  </div>
</template>

<style lang="scss" scoped>
.inputWrap {
  width: 200px;
}
</style>
