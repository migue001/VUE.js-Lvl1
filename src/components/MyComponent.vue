<template lang="">
    <div class="my-component">
        <h1 v-if="isVisible" >{{message}}</h1>
        <button v-on:click="sayHello">Aparecer - Desaparecer </button>
        <input v-model="message">

        <ul> 
            <li v-for="item in list" :key = "item.id">{{item.text}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MycomponentView',
    data(){
        return{
            message: 'Hello World',
            isVisible: true,
            list: [
                {id:1,text: 'First Item'},
                {id:2,text: 'Second Item'}
            ]
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