import AppCheckbox from './AppCheckbox.vue';

export default {
  title: 'Shared/AppCheckbox',
  component: AppCheckbox,
  argTypes: {
    label: 'Checkbox',
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      options: [true, false],
      control: {
        type: 'radio',
      }
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AppCheckbox },
  template: '<AppCheckbox v-bind="$props" />',
});

export const Checkbox = Template.bind({});
Checkbox.args = {
  disabled: false,
  label: 'Checkbox',
  size: 'medium',
};