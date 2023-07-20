<template>
    <div>
        <!-- :class="{ 'is-checked': value }" 中的 value 是指代组件的 value 属性，也就是通过 props 接收到的父组件传递的值 -->
        <div class="yzh-switch" :class="{ 'is-checked': value }" @click="handleClick">
            <!-- $ref:在子组件访问父组件的元素或组件实例，在父组件可以使用$refs.core来访问这个元素
            ref 的作用就是将一个元素或组件的引用暴露给父组件，让父组件可以通过 $refs 来访问或操作这个元素或组件
            -->
            <span class="yzh-switch_core" ref="core">
                <span class="yzh-switch_button"></span>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'yzhSwitch',
    props: {
        // props 是用于接收父组件传递数据的一个机制，它的值是只读的，不能直接在子组件中修改
        value: {
            type: Boolean,
            default: false
        },
        activeColor: {//按钮激活
            type: String,
            default: ''
        },
        inactiveColor: {//按钮未激活
            type: String,
            default: ''
        }
    },
    methods: {
        async handleClick() {
            this.$emit('input', !this.value)
            // 这里需要注意的是我们需要在父组件修改完数据之后再调用setcolor修改
            await this.$nextTick()//等待value发生变化后再setColor
            this.setColor()
        },
        setColor() {
            if (this.activeColor || this.inactiveColor) {
                let color = this.value ? this.activeColor : this.inactiveColor
                this.$refs.core.style.borderColor = color
                this.$refs.core.style.backgroundColor = color
            }
        }
    },
    mounted() {
        // 修改开关颜色
        this.setColor()
    },
}
</script>
<style lang="scss" setup>
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
        transition: border-color .3s, background-color .3s;
        vertical-align: middle;

        .yzh-switch_button {
            position: absolute;
            top: 1px;
            left: 1px;
            border-radius: 100%;
            transition: all .3s;
            width: 16px;
            height: 16px;
            background-color: #fff;
        }
    }
}

// 选中样式
.is-checked {
    .yzh-switch_core {
        border-color: #409eff;
        background-color: #409eff;

        .yzh-switch_button {
            transform: translateX(20px);
        }
    }
}

// 隐藏input标签
.yzh-switch_input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
}
</style>