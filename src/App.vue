<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        Hello: defineAsyncComponent(() => import('./components/Hello'))
    }
}
</script>