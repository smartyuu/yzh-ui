<template>
  <div>
    <div id="button-container">
      <div class="row">
        <yzh-button>按钮</yzh-button>
        <yzh-button @click="fn1" type="primary">按钮</yzh-button>
        <yzh-button type="success">按钮</yzh-button>
        <yzh-button type="info">按钮</yzh-button>
        <yzh-button type="warning">按钮</yzh-button>
        <yzh-button type="danger">按钮</yzh-button>
      </div>
      <div class="row">
        <yzh-button plain>按钮</yzh-button>
        <yzh-button plain type="primary">按钮</yzh-button>
        <yzh-button plain type="success">按钮</yzh-button>
        <yzh-button plain type="info">按钮</yzh-button>
        <yzh-button plain type="warning">按钮</yzh-button>
        <yzh-button plain type="danger">按钮</yzh-button>
      </div>
      <div class="row">
        <yzh-button round>按钮</yzh-button>
        <yzh-button round type="primary">按钮</yzh-button>
        <yzh-button round type="success">按钮</yzh-button>
        <yzh-button round type="info">按钮</yzh-button>
        <yzh-button round type="warning">按钮</yzh-button>
        <yzh-button round type="danger">按钮</yzh-button>
      </div>
      <div class="row">
        <yzh-button plain icon="one-icon-check" circle></yzh-button>
        <yzh-button plain icon="one-icon-camera" circle type="primary"></yzh-button>
        <yzh-button plain icon="one-icon-bluetoothon" circle type="success"></yzh-button>
        <yzh-button plain icon="one-icon-addto" circle type="info"></yzh-button>
        <yzh-button plain icon="one-icon-DND_mode" circle type="warning"></yzh-button>
        <yzh-button plain icon="one-icon-delete" circle type="danger"></yzh-button>
      </div>
      <div class="row">
        <yzh-button disabled>按钮</yzh-button>
        <yzh-button disabled type="primary">按钮</yzh-button>
        <yzh-button disabled type="success">按钮</yzh-button>
        <yzh-button disabled type="info">按钮</yzh-button>
        <yzh-button disabled type="warning">按钮</yzh-button>
        <yzh-button disabled type="danger">按钮</yzh-button>
      </div>
    </div>
    <div id="dialog-container">
      <yzh-button type="primary" @click="visible = true">按钮</yzh-button>
      <yzh-dialog width="30%" top="100px" :visible="visible" @close="close">
        <template #title>
          <h3>温馨提醒</h3>
        </template>
        <template #body>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </template>
        <template #footer>
          <yzh-button class="yzhButton" type="primary" @click="visible = false">确定</yzh-button>
          <yzh-button @click="visible = false">取消</yzh-button>
        </template>
      </yzh-dialog>
    </div>
    <div>
      <yzh-input placeholder="请输入内容" v-model="username" :clearable="true" />
      <yzh-input placeholder="请输入内容2" v-model="username2" :clearable="true" />
      <yzh-input placeholder="请输入内容3" show-password type="password" v-model="password" :clearable="true" />
    </div>
    <div id="switch-container">
      <yzh-switch v-model="active" :statue="'开'" :transStatue="'关'"></yzh-switch>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const visible = ref(false);
    const username = ref('');
    const username2 = ref('');
    const password = ref('');
    const active = ref(false);
    function fn1() {
      console.log('Button clicked');
    }

    function close() {
      visible.value = false;
    }

    return {
      visible,
      username,
      username2,
      password,
      active,
      fn1,
      close
    };
  }
}
</script>