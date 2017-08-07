<template>
  <cell-box>
    <cell to="a">切换账号</cell>
    <cell to="b">更改手机号</cell>
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

