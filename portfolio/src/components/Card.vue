<template>
        <div class="card">
            <header>
                <a>titleprops</a>
                <h1>skillprops</h1>
                content lorem ipsum stuff whatever dummy text developing
            </header>
        </div>
</template>


<script>
export default {
    
}
</script>

<style>
.card {
    display: flex;
    position: relative;
    flex-direction: column;
    height: 350px;
    width: 400px;
    min-width: 250px;
    padding: 1.5rem;

    border-radius: 16px;
    background: #282828;
    box-shadow: -1rem 0 3rem #000;

    transition: .2s;
}
.card:hover {
    transform: translateY(-1rem);
}

.card:hover~.card{
    transform: translateX(130px);
}

.card:not(:first-child) {
    margin-left: -130px;
}
</style>