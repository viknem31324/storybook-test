<template>
  <label :class="classesLabel">
    {{ label }}
    <input
      :class="classesInput"
      :name="`field-`+ id"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :disabled="disabled"
      :placeholder="placeholder"
    />
  </label>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'AppInput',
  props: {
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: false,
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
    },
    placeholder: {
      type: String,
      required: false,
    }
  },
  computed: {
    classesInput() {
      return {
        'text-field': true,
        'text-field-disabled': this.disabled,
        [`text-field-${this.size}`]: true,
      };
    },
    classesLabel() {
      return {
        'label-field': true,
        'label-field-disabled': this.disabled,
        [`label-field-${this.size}`]: true,
      };
    },
  }
});
</script>
<style scoped>
.label-field {
  font-size: 16px;
  color:#000;
}
.label-field-disabled {
  color:#ccc;
}
.text-field-small {
  font-size: 14px;
}

.text-field-medium {
  font-size: 16px;
}

.text-field-large {
  font-size: 18px;
}
.text-field {
  padding: 0 0 0 0;
  margin: 0 0 0 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background-color: transparent;
  transition: border .2s;
}

.text-field:focus {
  outline: none;
  border-bottom: 1px solid #42b983;
}

.text-field:disabled {
  background-color: #eee;
}
.text-field:disabled::placeholder {
  color: #eee;
}

.text-field-small {
  width: 120px;
  height: 20px;
}

.text-field-medium {
  width: 150px;
  height: 25px;
}

.text-field-large {
  width: 180px;
  height: 30px;
}
</style>