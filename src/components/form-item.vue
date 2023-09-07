<template>
    <div class="yzh-form-item">
        <label class="yzh-form-item_label" :style="{ width: Form.labelWidth }">{{ label }}</label>
        <div class="yzh-form-item_content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { defineComponent, inject } from 'vue';

export default defineComponent({
    name: 'yzhFormItem',
    props: {
        label: {
            type: String,
            default: ''
        },
        model: {
            type: Object,
            required: true
        }
    },
    setup() {
        const Form = inject('Form');
        return {
            Form
        };
    }
});
</script>

<style lang="scss" scoped>
.yzh-form-item {
    margin-bottom: 25px;

    .yzh-form-item_label {
        text-align: right;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        box-sizing: border-box;
    }

    .yzh-form-item_content {
        line-height: 40px;
        position: relative;
        font-size: 14px;
        overflow: hidden;
    }
}
</style>