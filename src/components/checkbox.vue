<script>
import { defineComponent, inject, computed } from 'vue';

export default defineComponent({
    name: 'yzhCheckBox',
    setup(props, { emit }) {
        const CheckboxGroup = inject('CheckboxGroup');

        const model = computed({
            get() {
                return isGroup.value ? CheckboxGroup.value : props.value;
            },
            set(value) {
                if (isGroup.value) {
                    CheckboxGroup.$emit('input', value);
                } else {
                    emit('input', value);
                }
                console.log(value);
            },
        });

        const isGroup = computed(() => !!CheckboxGroup);

        const isChecked = computed(() => {
            return isGroup.value ? model.value.includes(props.label) : model.value;
        });

        return {
            model,
            isGroup,
            isChecked,
        };
    },
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: '',
        },
        name: {
            type: String,
            default: '',
        },
    },
});
</script>
<style lang="scss" scoped>
.yzh-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    margin-right: 30px;

    .yzh-checkbox_input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;

        .yzh-checkbox_inner {
            display: inline-block;
            position: relative;
            border: 1px solid #dcdfe6;
            border-radius: 2px;
            box-sizing: border-box;
            width: 14px;
            height: 14px;
            background-color: #fff;
            z-index: 1;
            transition: border-color .25s cubic-bezier(.71, -.46, .29, 1.46), background-color .25s, cubic-bezier(.71, -.46, .29, 1.46);

            &:after {
                box-sizing: content-box;
                content: '';
                border: 1px solid #ffffff;
                border-left: 0;
                border-top: 0;
                height: 7px;
                left: 4px;
                position: absolute;
                top: 1px;
                transform: rotate(45deg) scaleY(0);
                width: 3px;
                transition: transform .15s ease-in .05s;
                transform-origin: center;
            }
        }

        .yzh-checkbox_original {
            opacity: 0;
            outline: none;
            position: absolute;
            left: 10px;
            margin: 0;
            width: 0;
            height: 0;
            z-index: -1;
        }
    }

    .yzh-checkbox_label {
        display: inline-block;
        padding-left: 10px;
        line-height: 19px;
        font-size: 14px;
    }
}

// 选中的样式
.yzh-checkbox.is-checked {
    .yzh-checkbox_input {
        .yzh-checkbox_inner {
            background-color: #409eff;
            border-color: #409eff;
        }

        &:after {
            transform: rotate(45deg) scaleY(1);
        }
    }

    .yzh-checkbox_label {
        color: #409eff;
    }
}
</style>
