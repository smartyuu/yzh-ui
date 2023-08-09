<template>
    <div class="yzh-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
import { defineComponent, provide } from 'vue';

export default defineComponent({
    name: 'yzhCheckboxGroup',
    setup(_, { slots }) {
        provide('CheckboxGroup', this);

        return {
            slots
        };
    },
    props: {
        value: {
            type: Array
        }
    }
});
</script>