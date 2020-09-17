<template>
    <div>
        <header class="about-header">
            <h1 :style="titleStyle">About Me</h1>
        </header>
        <div class="about-content">
            <p>{{aboutContent}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutMe',
    props: {
        titleColor: String,
        aboutContent: String
    },
    computed: {
        titleStyle() {return {'--text-color': this.titleColor}}
    }
}
</script>

<style>
    .about-header {
        margin-top: 50px;
    }
    .about-header h1{
        color: var(--text-color);
    }

    .about-content{
        margin: 0px 20% 100px 20%;
    }
</style>