<template>
    <div class="yzh-input" :class="{ 'yzh-input_suffix': showSuffix }">
        <input class="yzh-input_inner" :placeholder="placeholder" :class="{ 'is-disabled': disabled }"
            :type="showPassword ? (passwordVisible ? 'text' : 'password') : type" :name="name" :value="value"
            @input="handleInput" :disabled="disabled" />
        <span class="yzh-input_suffix">
            <i class="one-input_icon one-icon-visible" v-if="showPassword" @click="handlePassword"></i>
            <i class="one-input_icon one-icon-cancel" v-if="clearable && value" @click="clear"></i>
        </span>
    </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
    name: 'yzhInput',
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        name: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ''
        },
        clearable: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const passwordVisible = ref(false);

        const handleInput = (event) => {
            emit('update:value', event.target.value);
        };

        const clear = () => {
            emit('update:value', '');
        };

        const handlePassword = () => {
            passwordVisible.value = !passwordVisible.value;
        };

        const showSuffix = computed(() => {
            return props.clearable || props.showPassword;
        });

        return {
            passwordVisible,
            handleInput,
            clear,
            handlePassword,
            showSuffix
        };
    }
});
</script>
<style lang="scss" scoped>
.yzh-input {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;

    .yzh-input_inner {
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645, 045, .355, 1);
        width: 100%;

        &:focus {
            outline: none;
            border-color: #409eff;
        }

        // input禁用样式
        &.is-disabled {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
}

// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.yzh-input_suffix {
    .yzh-input_inner {
        padding-right: 30px;
    }

    .yzh-input_suffix {
        position: absolute;
        right: 10px;
        height: 100%;
        top: 0;
        line-height: 40px;
        text-align: center;
        color: #c0c4cc;
        transition: all .3s;
        z-index: 900;

        i {
            color: #c0c4cc;
            margin-right: 20px;
            font-size: 14px;
            cursor: pointer;
            transition: color .2s cubic-bezier(.645, .045, .355, 1);
        }
    }
}
</style>
