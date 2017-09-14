<template>
  <div>
    <my-header content="账户管理"></my-header>
    <cell-box>
      <cell to="/editpwd">修改密码</cell>
      <cell to="/login">切换账号</cell>
      <cell to="/changephone">更改手机号</cell>
    </cell-box>
  </div>
</template>
<script>
import { CellBox, Cell } from '../base/cell'
import MyHeader from '../header'
export default {
  name: 'account',
  components: {
    CellBox,
    Cell,
    MyHeader
  },
  beforeMount() {
    document.title = '账户管理'
  }
}
</script>

