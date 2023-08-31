<script>
import { Card, DocumentChip } from "@/components/atoms/index.js"
import { Card, DocumentChip } from "@/components/atoms/index.js"
import { DocumentChip } from "../atoms"

export default {
  components: {
    Card,
    DocumentChip,
  },
}
</script>

<template>
  <div>
    <h1>01 締結版データ</h1>
    <Card text="共通" />
    <Card text="hello world hello world" />
    <DocumentChip text="契約書.pdf" />
  </div>
</template>

<style lang="scss" scoped></style>
