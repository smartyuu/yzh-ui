
<template>
    <div>
        <!-- :class="{ 'is-checked': value }" 中的 value 是指代组件的 value 属性，也就是通过 props 接收到的父组件传递的值 -->
        <div class="yzh-switch" :class="{ 'is-checked': modelValue }" @click="handleClick">
            <!-- $ref:在子组件访问父组件的元素或组件实例，在父组件可以使用$refs.core来访问这个元素
            ref 的作用就是将一个元素或组件的引用暴露给父组件，让父组件可以通过 $refs 来访问或操作这个元素或组件
            -->
            <span class="yzh-switch_core" ref="core">
                <span class="yzh-switch_button" aria-hidden="true"></span>
                <span class="yzh-switch_label">{{ modelValue ? statue : transStatue }}</span>
            </span>
        </div>
    </div>
</template>

<script>
import { nextTick } from 'vue';

export default {
    name: 'yzhSwitch',
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        activeColor: {
            type: String,
            default: ''
        },
        inactiveColor: {
            type: String,
            default: ''
        },
        statue: {
            type: String,
            default: ''
        },
        transStatue: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue'],
    mounted() {
        this.setColor();
    },
    methods: {
        async handleClick() {
            this.$emit('update:modelValue', !this.modelValue);
            await nextTick(); // 等待 modelValue 更新
            this.setColor();
        },
        setColor() {
            if (this.activeColor || this.inactiveColor) {
                const color = this.modelValue ? this.activeColor : this.inactiveColor;
                this.$refs.core.style.borderColor = color;
                this.$refs.core.style.backgroundColor = color;
            }
        }
    },
    watch: {
        modelValue() {
            this.setColor();
        }
    }
};
</script>

<style lang="scss" scoped>
.yzh-switch {
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;

    .yzh-switch_core {
        margin: 0;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor: pointer;
        transition: border-color 0.3s, background-color 0.3s;
        vertical-align: middle;

        .yzh-switch_button {
            position: absolute;
            top: 1px;
            left: 1px;
            border-radius: 100%;
            transition: all 0.3s;
            width: 16px;
            height: 16px;
            background-color: #fff;
        }

        .yzh-switch_label {
            position: absolute;
            top: 50%;
            left: 130%;
            transform: translate(-50%, -50%);
            white-space: nowrap;
            pointer-events: none;
        }
    }
}

.is-checked {
    .yzh-switch_core {
        border-color: #ff8640;
        background-color: #ff8640;

        .yzh-switch_button {
            transform: translateX(20px);
        }
    }
}

.yzh-switch_input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
}
</style>