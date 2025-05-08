<template lang="">
    <div class="my-component">
        <h1 v-if="isVisible" >{{message}}</h1>
        <button v-on:click="sayHello">Aparecer - Desaparecer </button>
        <input v-model="message">
    </div>
</template>

<script>
export default {
    name: 'MycomponentView',
    data(){
        return{
            message: 'Hello World',
            isVisible: true
        }
    },
    methods: {
        visibilidad(){
            this.isVisible = !this.isVisible;
        },
        sayHello(){
            alert('Hello!');
        }
    }
}
</script>