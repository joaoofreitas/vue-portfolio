<template>
    <section class="card-list">
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
    </section>
</template>

<script>
import Cards from './Card.vue'


export default {
    name: 'CardsList',
    data() {
        return {
            skills:{
                DevOps: ['DevOps','Docker', 'AWS EC2'],
                Programming: ['Programming','Python', 'C/C++', 'Javascript', 'Go'], 
                Frameworks: ['Frameworks','NodeJS', 'Vue' , 'React'],
                OS : ['OS','GNU/Linux']
            }
        }
    },
    components: {
        Cards
    }
}
</script>

<style>
.card-list {
    display: flex;
    padding: 3rem;
    overflow-x: scroll;
}

.card-list::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

.card-list::-webkit-slider-thumb {
    background: #282828;
    border-radius: 10px;
    box-shadow: inset 2px 2px 2px hsla(0,0%,100%,.25), inset -2px -2px 2px rgba(0,0,0,1.25);
}

.card-list::-webkit-scrollbar-track{
    background: linear-gradient(90deg,#1d2021,#1d2021 1px,#1d2021 0,#3c3836);
}
</style>