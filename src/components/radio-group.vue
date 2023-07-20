<template>
    <div class="yzh-radio-group">
        <!-- 直接接受父组件传过来的v-model绑定的value，这样就可以知道这个group是什么类型的，比如性别 -->
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'yzhRadioGroup',
    provide() {
        return {//我是爷爷，provide给孙子；可以通过这个属性监测是否被group包裹
            RadioGroup: this
        }
    },
    props: {
        // 组件接收到了value值，我们需要触发这个组件的input事件
        // provide 与 inject  用来做祖孙之间得组件通讯
        value: null
    }
}
</script>
