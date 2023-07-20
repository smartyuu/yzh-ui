<template>
  <div>
    <div id="button-container">
      <div class="row">
        <yzhButton>按钮</yzhButton>
        <yzhButton @click="fn1" type="primary">按钮</yzhButton>
        <yzhButton type="success">按钮</yzhButton>
        <yzhButton type="info">按钮</yzhButton>
        <yzhButton type="warning">按钮</yzhButton>
        <yzhButton type="danger">按钮</yzhButton>
      </div>
      <div class="row">
        <yzhButton plain>按钮</yzhButton>
        <yzhButton plain type="primary">按钮</yzhButton>
        <yzhButton plain type="success">按钮</yzhButton>
        <yzhButton plain type="info">按钮</yzhButton>
        <yzhButton plain type="warning">按钮</yzhButton>
        <yzhButton plain type="danger">按钮</yzhButton>
      </div>
      <div class="row">
        <yzhButton round>按钮</yzhButton>
        <yzhButton round type="primary">按钮</yzhButton>
        <yzhButton round type="success">按钮</yzhButton>
        <yzhButton round type="info">按钮</yzhButton>
        <yzhButton round type="warning">按钮</yzhButton>
        <yzhButton round type="danger">按钮</yzhButton>
      </div>
      <div class="row">
        <yzhButton plain icon="one-icon-check" circle></yzhButton>
        <yzhButton plain icon="one-icon-camera" circle type="primary"></yzhButton>
        <yzhButton plain icon="one-icon-bluetoothon" circle type="success"></yzhButton>
        <yzhButton plain icon="one-icon-addto" circle type="info"></yzhButton>
        <yzhButton plain icon="one-icon-DND_mode" circle type="warning"></yzhButton>
        <yzhButton plain icon="one-icon-delete" circle type="danger"></yzhButton>
      </div>
      <div class="row">
        <yzhButton disabled>按钮</yzhButton>
        <yzhButton disabled type="primary">按钮</yzhButton>
        <yzhButton disabled type="success">按钮</yzhButton>
        <yzhButton disabled type="info">按钮</yzhButton>
        <yzhButton disabled type="warning">按钮</yzhButton>
        <yzhButton disabled type="danger">按钮</yzhButton>
      </div>
    </div>
    <div id="dialog-container">
      <!-- <yzh-dialog title="温馨提示"></yzh-dialog> -->
      <!-- 1. 使用插槽的tip框;插槽由三部分组成，没有传值的话就是默认的插槽，特别注意，记得用  v-slot:插槽名字  指定插槽的名字
           2. 指定宽度和高度-->
      <yzhButton type="primary" @click="visiable = true">按钮</yzhButton>
      <yzhDialog width="30%" top="100px" :visiable="visiable" @close="close">
        <template v-slot:title>
          <h3> 温馨提醒</h3>
        </template>
        <template v-slot:body>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </template>
        <!-- <template v-slot:footer>
          <yzhButton class="yzhButton" type="primary" @click="visiable = false">确定</yzhButton>
          <yzhButton @click="visiable = false">取消</yzhButton>
        </template> -->
      </yzhDialog>
    </div>
    <div>
      <yzhInput placeholder="请输入内容" v-model="username" :clearable="true" />
      <yzhInput placeholder="请输入内容2" v-model="username" :clearable="true" />
      <yzhInput placeholder="请输入内容3" showPassword type="password" v-model="username" :clearable="true" />
    </div>
    <div id="switch-container">
      <yzhSwitch v-model="active"></yzhSwitch>
      <!-- 自定义颜色 -->
      <yzhSwitch v-model="active" activeColor="green" inactiveColor="red"></yzhSwitch>
    </div>
    <div id="radio-container">
      <yzhRadio label="1" v-model="gender">male</yzhRadio>
      <yzhRadio label="0" v-model="gender">female</yzhRadio>
    </div>
    <yzhRadioGroup v-model="gender">
      <yzhRadio label="3">男</yzhRadio>
      <yzhRadio label="4">女</yzhRadio>
    </yzhRadioGroup>
    <yzhCheckBox></yzhCheckBox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visiable: false,
      username: '',
      active: false,
      gender: '1',
      label: ''
    }
  },
  methods: {
    fn1() {
      console.log(123);
    },
    close(e) {
      // e是接受传过来的事件
      this.visiable = e
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;

  .yzhButton {
    margin-right: 20px;
  }

}
</style>
