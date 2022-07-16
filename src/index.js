import Vue from 'vue';
import './assets/styles/style';

new Vue({
    el: '#app',
    components: {
        Hello: () => import('./components/hello')
    }
});