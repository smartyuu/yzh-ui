<template>
    <button class="yzh-button" :class="[`yzh-button-${type}`, {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled
    }]" :disabled="disabled" @click="handleClick">
        <i v-if="icon" :class="icon"></i>
        <!-- 如果没有传入任何内容，span 将被隐藏以避免额外的空格 -->
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script>
// import { defineProps, defineEmits } from 'vue';

export default {
    name: 'yzhButton',
    setup(props, { emit }) {
        const handleClick = (e) => {
            emit('click', e);
        };

        return {
            handleClick
        };
    },
    props: {
        type: {
            type: String,
            default: 'default',
        },
        plain: {
            type: Boolean,
            default: false,
        },
        round: {
            type: Boolean,
            default: false,
        },
        circle: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
 

<style lang="scss" scoped>
.yzh-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    //禁止元素的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;

    &:hover,
    &:focus {
        color: #ff8640;
        border-color: #ffedc6;
        background-color: #fff9ec;
    }
}

.yzh-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    //禁止元素的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;

    &:hover,
    &:focus {
        color: #ff8640;
        border-color: #ffe8c6;
        background-color: #fff4ec;
    }
}

.yzh-button-primary {
    color: #fff;
    background-color: #ff8640;
    border-color: #ff8640;

    &:hover,
    &:focus {
        background: #ff9666;
        background-color: #ff9e66;
        color: #fff;
    }
}

.yzh-button-success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;

    &:hover,
    &:focus {
        background: #85ce61;
        background-color: #85ce61;
        color: #fff;
    }
}

.yzh-button-info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;

    &:hover,
    &:focus {
        background: #a6a9ad;
        background-color: #a6a9ad;
        color: #fff;
    }
}

.yzh-button-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;

    &:hover,
    &:focus {
        background: #ebb563;
        background-color: #ebb563;
        color: #fff;
    }
}

.yzh-button-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;

    &:hover,
    &:focus {
        background: #f78989;
        background-color: #f78989;
        color: #fff;
    }
}

// 朴素按钮样式
.yzh-button.is-plain {

    &:hover,
    &:focus {
        background: #fff;
        border-color: #ff9148;
        color: #ff8640;
    }
}

.yzh-button-primary.is-plain {
    color: #ff8640;
    background: #fff4ec;

    &:hover,
    &:focus {
        background: #ff8640;
        border-color: #ff8640;
        color: #fff;
    }
}

.yzh-button-success.is-plain {
    color: #67c23a;
    background: #c2e7b0;

    &:hover,
    &:focus {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
    }
}

.yzh-button-info.is-plain {
    color: #909399;
    background: #d3d4d6;

    &:hover,
    &:focus {
        background: #909399;
        border-color: #909399;
        color: #fff;
    }
}

.yzh-button-warning.is-plain {
    color: #e6a23c;
    background: #f5dab1;

    &:hover,
    &:focus {
        background: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
    }
}

.yzh-button-danger.is-plain {
    color: #f56c6c;
    background: #fbc4c4;

    &:hover,
    &:focus {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
    }
}

// round属性
.is-round {
    border-radius: 20px;
    padding: 12px 23px;
}

// circle属性
.is-circle {
    border-radius: 50%;
    padding: 12px;
}

// icon配套样式
.yzh-button [class*=one-icon-]+span {
    margin-left: 5px;
}

// disabled属性
.is-disabled {
    cursor: no-drop;
}
</style>
