<template>
    <section class="card-list">
        <Cards  v-scroll-to="{el: '#programming', offset: -200}"
                skill="Programming" 
                skillColor="#bdae93">
                
                <slot name="programming"/>
                <template v-slot:tags>
                    <slot name="programming-tags"/>
                </template>
        </Cards>
        <Cards  v-scroll-to="{el: '#servers', offset: -200}"
                skill="Server Management"  
                skillColor="#bdae93">

                <slot name="server"/>
                <template v-slot:tags>
                    <slot name="server-tags"/>
                </template>
                
        </Cards>
        <Cards  v-scroll-to="{el: '#electronics', offset: -200}"
                skill="Electronics" 
                skillColor="#bdae93">

                <slot name="electronics"/>

                <template v-slot:tags>
                    <slot name="electronics-tags"/>
                </template>
        </Cards>
        <Cards  v-scroll-to="{el: '#projects', offset: -200}"
                skill="Projects"  
                skillColor="#bdae93">

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
    overflow-x: hidden;
}
</style>