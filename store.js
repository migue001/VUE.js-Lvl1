import Vue from 'vue';
import Vuex from 'vuex';

Vue.useAttrs(Vuex);

export default new Vuex.Store({
    state: {
        message: 'Hello World with Vuex!'
    },
    mutattions: {
        setMessage(state,newMessage){
            state.message = newMessage;
        }
    }

});