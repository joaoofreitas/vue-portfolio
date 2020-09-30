<template>
    <div>
        <header class="about-header">
            <h1 :style="titleStyle">About Me</h1>
        </header>
        <div class="about-content">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutMeStruct',
    props: {
        titleColor: String,
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
        margin: 0px 10% 100px 10%;
    }
</style>