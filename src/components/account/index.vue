<template>
  <cell-box>
    <cell :link="true" title="切换账号"></cell>
    <cell :line="true" title="更改手机号"></cell>
  </cell-box>
</template>
<script>
import { CellBox, Cell } from '../base/cell'
export default {
  name: 'account',
  components: {
    CellBox,
    Cell
  }
}
</script>

