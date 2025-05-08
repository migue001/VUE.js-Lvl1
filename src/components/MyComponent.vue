<template lang="">
    <div class="my-component">
        <h1 v-bind:class="{highlighted:isHighlighted}">{{title}}</h1>
        <button v-on:click="toggleHighlight">Toggle Highlight</button>
        <input v-model="message">

        <ul> 
            <li v-for="item in list" :key = "item.id">{{item.text}}</li>
        </ul>
    </div>
</template>
<style scoped>
    .highlighted{
        color:gold
    }
</style>
<script>
export default {
    name: 'MycomponentView',
    data(){
        return{
            message: 'Hello World',
            title: 'this is the title',
            isHighlighted: false,
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
        },
        toggleHighlight(){
            this.isHighlighted = !this.isHighlighted;
        }
    }
}
</script>