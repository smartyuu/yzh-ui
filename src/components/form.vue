<template>
    <div class="yzh-form">
        <slot></slot>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'yzhForm',
    provide() {
        return {
            Form: this
        };
    },
    props: {
        model: {
            type: Object,
            required: true
        },
        labelWidth: {
            type: String,
            default: '80px'
        }
    }
});
</script>

<style lang="scss" scoped>
// .yzh-form {
//     // 样式
// }
</style>