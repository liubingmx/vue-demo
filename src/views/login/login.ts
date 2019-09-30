import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        propMessage: String,
    },
})
export default class Login extends Vue {
    private username = '';
    private password = '';
}
