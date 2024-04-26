<template>
  <form autocomplete="off" @submit.prevent="() => false">
    <div class="g-form-inner-div" :class="[$attrs['inner-class-name']]">
      <slot></slot>
    </div>
  </form>
</template>

<script>
/** @attr g-validation g-required g-email g-phone g-number g-regexp g-url g-max g-min g-range
 * @value String | [value:String, errText:String]
 *  @el v-bind="{attr: value}"
 *  @example <input v-model="xxx" v-bind="{'g-validation': true, g-validate-value, 'g-required': true, 'g-number':[]}"></input>
 */
export default {
  props: {},
  data () {
    return {
      validateRules: [],
      mutationObserverList: [],
      checkAttrData: {
        'g-required': (modelVal, attrVal) => {
          if (attrVal === 'false' || !attrVal) {
            return true;
          }
          return !!modelVal;
        },
        'g-email': (modelVal) => {
          return /^[A-Za-z0-9\u4e00-\u9fa5_\-\.]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_\-]+)+$/.test(modelVal);
        },
        'g-phone': (modelVal) => {
          return /^((13[0-9])|(14(0|[5-7]|9))|(15([0-3]|[5-9]))|(16(2|[5-7]))|(17[0-8])|(18[0-9])|(19([0-3]|[5-9])))\\d{8}$/.test(
            modelVal
          );
        },
        'g-number': (modelVal) => {
          return Number(modelVal);
        },
        'g-regexp': (modelVal, attrVal) => {
          return new RegExp(attrVal, 'g').test(modelVal);
        },
        'g-url': (modelVal) => {
          return /^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*$/.test(
            modelVal
          );
        },
        'g-max': (modelVal, attrVal) => {
          return Number(modelVal) <= attrVal;
        },
        'g-min': (modelVal, attrVal) => {
          return Number(modelVal) >= attrVal;
        },
        'g-range': (modelVal, attrVal) => {
          if (attrVal instanceof Array) {
            console.error('g-range不是正确的数组');
          }
          const max = attrVal[1];
          const min = attrVal[0];
          return Number(modelVal) >= min && Number(modelVal) <= max;
        }
      }
    };
  },
  mounted () { },
  methods: {
    validate (callBack) {
      this.setValidateRule();
      const passValidate = this.validateRules.every(
        (validateTurthy) => validateTurthy
      );
      if (typeof callBack === 'function') {
        callBack(passValidate);
      }
      return Promise.resolve(passValidate);
    },
    /** 获取需要检验的节点并生成校验 */
    setValidateRule () {
      try {
        this.validateRules = [];
        this.disconnectMutationList();
        let hasCheckErr = false;
        const nodeList = this.$el.querySelectorAll('[g-validation="true"]');
        nodeList.forEach((node) => {
          // 需要校验的值
          const observer = null;
          const errText =
            node.getAttribute('g-error-text') || node.getAttribute('placeholder');
          // 遍历校验规则，和校验值进行校验
          for (const ruleAttr in this.checkAttrData) {
            const ruleAttrVal = node.getAttribute(ruleAttr);
            if (ruleAttrVal && this.checkAttrData[ruleAttr]) {
              // 错误提示
              // errText = this.checkAttrData[attr].errText || errText;
              const nodeIsValidated = this.checkNodeIsValidated(node, ruleAttr);
              this.validateRules.push(nodeIsValidated); // 整体校验
              if (!nodeIsValidated) {
                // 没有检验通过的需要加上错误的样式，需自定义
                this.addErrorCustomerClass(node, observer, ruleAttr);
                // 只会报错一次
                if (!hasCheckErr) {
                  hasCheckErr = true;
                  this.$message.error(errText || '请完善资料');
                  const groupEl = this.getAddErrorClassEl(node);
                  groupEl.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                  });
                }
              } else {
                this.removeErrorCustomerClass(node);
              }
            }
          }
        });
      } catch (error) {
        console.error(error);
      }
    },
    /** 取消所有节点的观测 */
    disconnectMutationList () {
      this.mutationObserverList.forEach((item) => {
        if (item.disconnect) {
          item.disconnect();
        }
      });
      this.mutationObserverList = [];
    },
    /** 添加错误样式并监听参数变化 */
    addErrorCustomerClass (node, observer, ruleAttr) {
      const groupEl = this.getAddErrorClassEl(node);
      if (!groupEl) {
        return;
      }
      groupEl.classList.add('g-validated-error-group');
      const Mutation = window.MutationObserver || window.WebKitMutationObserver;
      observer = new Mutation((mutationsList) => {
        // mutationsList参数是个MutationRecord对象数组，描述了每个发生的变化
        mutationsList.forEach((mutation) => {
          const target = mutation.target;
          if (!target) {
            return;
          }
          // 变化的类型
          switch (mutation.type) {
            case 'attributes': {
              const nodeIsValidated = this.checkNodeIsValidated(node, ruleAttr);
              if (nodeIsValidated) {
                this.removeErrorCustomerClass(node);
                observer.disconnect();
              }
              break;
            }
          }
        });
      });

      // 开始观察ell元素并制定观察内容
      observer.observe(node, {
        attributes: true,
        // subtree: true,
        // characterData: true
        attributeFilter: ['g-validate-value']
      });
      this.mutationObserverList.push(observer);
    },
    // 检查节点是否校验通过
    checkNodeIsValidated (node, ruleAttr) {
      const modelVal = node.getAttribute('g-validate-value');
      const validateFn = this.checkAttrData[ruleAttr];
      const ruleAttrVal = node.getAttribute(ruleAttr);
      return validateFn(modelVal, ruleAttrVal);
    },
    /** 删除错误样式 */
    removeErrorCustomerClass (node) {
      const groupEl = this.getAddErrorClassEl(node);
      if (!groupEl) {
        return;
      }
      groupEl.classList.remove('g-validated-error-group');
    },
    /** 获取需要添加错误样式的父节点 */
    getAddErrorClassEl (node) {
      // 往上查找对应的父级节点，默认以form-group为单个校验的维度
      const closestElClassName = node.getAttribute('g-validate-parent-class') || 'form-group';
      return node.closest('.' + closestElClassName) || node.parentNode || node;
    }
  },
  beforeUnmount () {
    this.disconnectMutationList();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.g-form-inner-div {
  width: 100%;
  height: 100%;
}

:deep(.g-validated-error-group) {
  .form-control-ant-select,
  .ng-tree-select,
  .form-control,
  .form-control-ico-input,
  .ng-select .ant-select .ant-select-selector,
  .ng-rich-edit > .edit-show,
  .ant-select-selector {
    border-color: #fb655a;
  }

  &.form-control-ant-select,
  &.ng-tree-select,
  &.form-control,
  &.form-control-ico-input,
  &.ng-select .ant-select .ant-select-selector,
  &.ng-rich-edit > .edit-show,
  &.ant-select-selector {
    border-color: #fb655a;
  }
}
</style>
