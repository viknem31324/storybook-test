import AppInput from './AppInput.vue';

export default {
  title: 'Shared/AppInput',
  component: AppInput,
  argTypes: {
    label: 'AppInput',
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AppInput },
  template: '<AppInput v-bind="$props" />',
});

export const Input = Template.bind({});
Input.args = {
  disabled: false,
  label: 'Input',
  size: 'medium',
  type: 'text',
  placeholder: 'Input',
};

export const TextField = Template.bind({});
TextField.args = {
  disabled: false,
  label: 'TextField',
  size: 'medium',
  type: 'text',
  placeholder: 'Введите имя',
};

export const EmailField = Template.bind({});
EmailField.args = {
  disabled: false,
  label: 'EmailField',
  size: 'medium',
  type: 'email',
  placeholder: 'Введите email',
};