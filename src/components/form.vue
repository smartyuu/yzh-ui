<template>
    <div class="yzh-form">
        <slot></slot>
    </div>
</template>

<script>
import { defineComponent, provide } from 'vue';

export default defineComponent({
    name: 'YzhForm',
    props: {
        model: {
            type: Object,
            required: true,
        },
        labelWidth: {
            type: String,
            default: '80px',
        },
    },
    setup(props) {
        provide('yzhForm', props);

        return {};
    },
});
</script>

<style scoped>
.yzh-form {
    /* 样式 */
}
</style>