<template>
    <div class="yzh-radio-group">
        <!-- 直接接受父组件传过来的v-model绑定的value，这样就可以知道这个group是什么类型的，比如性别 -->
        <slot></slot>
    </div>
</template>

<script>
import { provide, ref } from 'vue';

export default {
    name: 'yzhRadioGroup',
    setup() {
        const radioGroup = ref(null); // 使用 ref 创建响应式引用

        // provide 与 inject 用于实现祖孙组件之间的通信
        provide('RadioGroup', radioGroup);

        // 组件接收到了value值，我们需要触发这个组件的input事件
        return {
            value: ref(null) // 使用 ref 创建响应式引用
        };
    }
};
</script>