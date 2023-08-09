<template>
    <transition name="dialog-fade">
        <div class="yzh-dialog" v-show="visible">
            <div id="dialog-container">
                <!-- self,表示只点击自己才触发，这样不会冒泡 -->
                <div class="yzh-dialog_wrapper" @click.self="handleClose">
                    <div class="yzh-dialog" :style="{ width, top }">
                        <div class="yzh-dialog_header">
                            <slot name="title">
                                <span class="yzh-dialog_title">{{ title }}</span>
                            </slot>
                            <button class="yzh-dialog_headerbtn" @click="handleClose">
                                <i class="one-icon-close"></i>
                            </button>
                        </div>
                        <div class="yzh-dialog_body">
                            <slot name="body"></slot>
                        </div>
                        <div class="yzh-dialog_footer">
                            <slot name="footer">
                                <yzhButton class="yzhButton">取消</yzhButton>
                                <yzhButton type="primary">确定</yzhButton>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'yzhDialog',
    props: {
        title: {
            type: String,
            default: '提示'
        },
        width: {
            type: String,
            default: '50%'
        },
        top: {
            type: String,
            default: '300px'
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClose() {
            // 点击子组件不能直接修改父组件的数据，我们应该触发父组件身上的事件，把新的值传递给父组件（$emit），然后在父组件身上修改
            // this.visible = false;
            this.$emit('update:visible', false);
        }


    }
});
</script>

<style lang="scss" scoped>
.yzh-dialog_wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0, 0, 0, 0.5);

    .yzh-dialog {
        position: relative;
        margin: 15vh auto 50px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        width: 30%;

        &_header {
            padding: 20px 20px 10px;

            .yzh-dialog_title {
                line-height: 24px;
                font-size: 18px;
                color: #303133;
            }

            .yzh-dialog_headerbtn {
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 0;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 16px;

                .one-icon-close {
                    color: 909399;
                }
            }
        }

        &_body {
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
        }

        &_footer {
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;

            ::v-deep .yzhButton:first-child {
                margin-right: 20px;
            }
        }
    }
}

.dialog-fade-enter-active {
    animation: fade 0.3s;
}

.dialog-fade-leave-active {
    animation: fade 0.3s reverse;
}

@keyframes fade {
    0% {
        // transform: translateY(-20px);
        opacity: 0;
    }

    100% {
        // transform: translateY(20px);
        opacity: 1;
    }
}
</style>