<template>
    <section class="card-list">
        <Cards  v-scroll-to="{el: '#programming', offset: -200}"
                title='Card Skills' 
                skill="Programming" 
                skillColor="whitesmoke" 
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
        
        <Cards  v-scroll-to="{el: '#servers', offset: -200}"
                title='Card Skills' 
                skill="Server Management"  
                skillColor="#whitesmoke"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
        
        <Cards  v-scroll-to="{el: '#electronics', offset: -200}"
                title='Card Skills' 
                skill="Electronics" 
                skillColor="#whitesmoke" 
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
        
        <Cards  v-scroll-to="{el: '#projects', offset: -200}"
                title='Card Skills' 
                skill="Projects"  
                skillColor="#whitesmoke"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
    </section>
</template>

<script>
import Vue from 'vue'
import Cards from './Card.vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)

export default {
    name: 'CardsList',
    data() {
        return {}
    },
    components: {
        Cards
    },
    methods: {}
}
</script>

<style>
.card-list {
    justify-content: center;
    display: flex;
    padding: 3rem;
    overflow-x: scroll;
}

.card-list::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

.card-list::-webkit-scrollbar-thumb {
    background: #282828;
    border-radius: 10px;
    box-shadow: inset 2px 2px 2px hsla(0,0%,75%,.25), inset -2px -2px 2px rgba(0,0,0,.25);
}

.card-list::-webkit-scrollbar-track{
    background: linear-gradient(180deg,#1d202144,#1d202144 1px,#1d202144 0,#3c3836AA);
}
</style>