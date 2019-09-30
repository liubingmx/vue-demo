import Vue from 'vue';
import Component from 'vue-class-component';
import InputSearch from '@/components/input-search/input-search.vue';


@Component({
    props: {
        propMessage: String,
    },
    components: {InputSearch },
})
export default class Home extends Vue {

}
