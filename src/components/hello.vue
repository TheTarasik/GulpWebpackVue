<template>
    <div class="hello-world">
        <h1>Hello world!</h1>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("Hello from Hello.vue");
    }
};
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
