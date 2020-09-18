<template>
    <div class="big-card">
        <header class="header">
            <h1 :style="titleStyle">{{title}}</h1>
        </header>
        <div class="divider"/>
        <div class="middle">
            <slot/>
        </div>
        <div class ="bottom-card">
            <slot name="footer"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BigCard',
    props: {
        title: String,
        titleColor: String
    },
    computed: {
        titleStyle() {return {'--text-color': this.titleColor}}
    }
}
</script>

<style scoped>
    .big-card {
        display: flex; 
        position: relative;
        flex-direction: column;
        min-height: 500px;
        min-width: 250px;
        
        padding: 1.5rem;
        margin: 1.5rem 1.5rem 0 1.5rem;

        border-radius: 16px;
        background: #282828;
        box-shadow: -1rem 0 3rem #000;
        
        overflow: hidden;
    }

    .divider {
        margin-bottom: 25px;
        width: 80%;
        align-self: center;
        border-bottom: 1px solid whitesmoke;
    }
    .header h1{
        color: var(--text-color);
    }

    .middle {
        margin: 0px 20% 80px 20%;
    }
</style>