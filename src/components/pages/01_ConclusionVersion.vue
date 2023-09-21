<script>
import {
  Card,
  DocumentChip,
  Input,
  DetailLink,
  Counter,
  CounterMapState,
  SlotScope,
} from "@/components/atoms/index.js"

export default {
  components: {
    Card,
    DocumentChip,
    Input,
    DetailLink,
    Counter,
    CounterMapState,
    SlotScope,
  },
}
</script>

<template>
  <div>
    <h1>01 締結版データ</h1>

    <br />
    <SlotScope>
      <template v-slot:scope="scope">
        {{ scope.userName.english }}
      </template>
    </SlotScope>
    <br />

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
    <Counter />
    <CounterMapState />
  </div>
</template>

<style lang="scss" scoped>
.inputWrap {
  width: 200px;
}
</style>
