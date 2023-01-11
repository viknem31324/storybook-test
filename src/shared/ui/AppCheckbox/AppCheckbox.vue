<template>
  <label class="checkbox-wrapper" :class="classes">
    {{label}}
    <input class="checkbox" type="checkbox" :class="classes" :checked="isChecked" :value="value" @change="updateInput" :disabled="this.disabled" />
    <span class="checkmark" :class="classesMark"></span>
  </label>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'AppCheckbox',
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    value: {
      type: String
    },
    modelValue: {
      default: ""
    },
    label: {
      type: String, required: true
    },
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    classes() {
      return {
        'checkbox-disabled': this.disabled,
        [`checkbox-${this.size}`]: true,
      };
    },
    classesMark () {
      return {
        'checkmark-disabled': this.disabled,
        [`checkmark-${this.size}`]: true,
      };
    },
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value)
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue
    }
  },
  methods: {
    updateInput(event) {
      let isChecked = event.target.checked
      if(!this.disabled) {
        if (this.modelValue instanceof Array) {
          let newValue = [...this.modelValue]
          if (isChecked) {
            newValue.push(this.value)
          } else {
            newValue.splice(newValue.indexOf(this.value), 1)
          }
          this.$emit('change', newValue)
        } else {
          this.$emit('change', isChecked ? this.trueValue : this.falseValue)
        }
      }
    }
  },
});
</script>
<style scoped>
.checkbox-wrapper {
  display: flex;
  position: relative;
  padding-left: 35px;
  margin-bottom: 6px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/* Hide the browser's default checkbox */
.checkbox{
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  border-radius: 2px;
  background-color: #eee;
  border: 1px solid #ccc;
}
/* On mouse-over, add a grey background color */
.checkbox-wrapper:hover input ~ .checkmark {
  background-color: #ccc;
}
/* When the checkbox is checked, add a blue background */
.checkbox-wrapper input:checked ~ .checkmark {
  background-color: #1CD4A7;
}
.checkbox-wrapper input:disabled ~ .checkmark {
  background-color: #ccc;
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
/* Show the checkmark when checked */
.checkbox-wrapper input:checked ~ .checkmark:after {
  display: block;
}
/* Style the checkmark/indicator */
.checkmark:after {
  left: 3px;
  top: 0;
  width: 7px;
  height: 7px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.checkbox-disabled {
  color: #ccc;
}
.checkbox-small {
  font-size: 14px;
}
.checkbox-medium {
  font-size: 16px;
}
.checkbox-large {
  font-size: 18px;
}

.checkmark-disabled {
  background-color: #ccc;
}
.checkmark-small {
  width: 12px;
  height: 12px;
}

.checkmark-small::after {
  left: 3px;
  width: 5px;
  height: 5px;
  border-width: 0 2px 2px 0;
}
.checkmark-medium {
  width: 15px;
  height: 15px;
}
.checkmark-medium::after {
  left: 3px;
  width: 7px;
  height: 7px;
}
.checkmark-large {
  width: 18px;
  height: 18px;
}
.checkmark-large::after {
  left: 4px;
  top: 1px;
}
</style>