<template>
  <cell-box>
    <cell to="/editpwd">修改密码</cell>
    <cell to="/login">切换账号</cell>
    <cell to="/changephone">更改手机号</cell>
  </cell-box>
</template>
<script>
import { CellBox, Cell } from '../base/cell'
export default {
  name: 'account',
  components: {
    CellBox,
    Cell
  },
  beforeMount() {
    document.title = '设置'
  }
}
</script>

