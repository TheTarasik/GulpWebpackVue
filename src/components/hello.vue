<template>
    <div class="hello-world">
        <h1>{{ this.title }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        }
    },
    mounted () {
        console.log('Hello');
    }
}
</script>

<style lang="scss">
    .hello-world {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        h1 {
            color: purple;
        }
    }
</style>