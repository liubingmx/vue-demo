import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        propMessage: String,
    },
})
export default class Register extends Vue {
    private name = '';
    private password = '';
    private loading = true;
    private orders = [];
    public created() {
        console.log('created');
    }
    public goHello() {
        // tslint:disable-next-line: no-floating-promises
        this.$router.push({ name: 'about' });
    }
    public changeList() {
        this.orders.pop();
    }
    private register() {
        console.log(this.$data.name, this.$data.password);
        this.$api.order.orderList({pageIndex: 1, pageSize: 10}).then((res: { data: any; }) => {
            console.log(res.data);
            this.name = res.data.message;
        });
    }
    private goLogin() {
        this.$router.push({name: 'login'});
    }
}

