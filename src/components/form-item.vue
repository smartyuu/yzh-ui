<template>
    <div class="yzh-form-item">
        <label class="yzh-form-item_label">{{ props.label }}</label>
        <div class="yzh-form-item_content" :style="{ width: yzhForm.labelWidth }">
            <slot></slot>
        </div>
    </div>
</template>
<script setup>

import { defineProps, inject } from 'vue';

const props = defineProps({
    label: {
        type: String,
        default: '',
    },
});

const yzhForm = inject('yzhForm');
</script>

<style scoped>
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