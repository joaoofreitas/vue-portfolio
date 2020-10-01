<template>
    <section class="card-list">
        <Cards  v-scroll-to="{el: '#programming', offset: -200}"
                title='_________' 
                skill="Programming" 
                skillColor="whitesmoke">
                
                <slot name="programming"/>
                <template v-slot:tags>
                    <slot name="programming-tags"/>
                </template>
        </Cards>
        <Cards  v-scroll-to="{el: '#servers', offset: -200}"
                title='_________' 
                skill="Server Management"  
                skillColor="#whitesmoke">

                <slot name="server"/>
                <template v-slot:tags>
                    <slot name="server-tags"/>
                </template>
                
        </Cards>
        <Cards  v-scroll-to="{el: '#electronics', offset: -200}"
                title='_________' 
                skill="Electronics" 
                skillColor="#whitesmoke">

                <slot name="electronics"/>

                <template v-slot:tags>
                    <slot name="electronics-tags"/>
                </template>
        </Cards>
        <Cards  v-scroll-to="{el: '#projects', offset: -200}"
                title='_________' 
                skill="Projects"  
                skillColor="#whitesmoke">

                <slot name="projects"/>

                <template v-slot:tags>
                    <slot name="projects-tags"/>
                </template>
         </Cards>
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