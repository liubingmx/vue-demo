import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '请输入关键字',
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
  },
})
export default class InputSearch extends Vue {
  private inputValue: string = '';
  public focusInput() {
    this.inputValue = '';
    this.$emit('startInput', true);
  }
  public blurInput() {
    if (this.inputValue) {
      this.$emit('getInputVal', this.inputValue);
    }
    this.$emit('startInput', false);
  }
}
