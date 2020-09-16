<template>
    <div class="big-card">
        <header class="header">
            <h1>About Me</h1>
        </header>
        <div class="middle">

        </div>
        <div class ="bottom">

        </div>
    </div>
</template>

<script>
export default {
    name: 'BigCard'
}
</script>

<style scoped>
    .big-card {
        display: flex; 
        position: relative;
        flex-direction: column;
        height: 700px;
        min-width: 250px;
        
        padding: 1.5rem;
        margin: 1.5rem 1.5rem 0 1.5rem;

        border-radius: 16px;
        background: #282828;
        box-shadow: -1rem 0 3rem #000;
    }
</style>