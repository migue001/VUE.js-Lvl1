<template>
  <MyComponent @onTagsChange="handleOnTagsChange" />
</template>

<script>
import MyComponent from './components/MyComponent.vue';

export default {
 
  components: {
    MyComponent
  },
  methods: {
    handleOnTagsChange(tags){
      console.log(tags);
    }
  }
}
</script>


