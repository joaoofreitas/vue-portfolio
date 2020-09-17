<template>
        <div class="card">
            <header>
                <a>{{title}}</a>
                <h1 :style="titleColor" >{{skill}}</h1 >
                {{content}}
            </header>
            <div class='bottom-card'>
                Card Bottom
            </div>
        </div>
</template>


<script>
export default {
    name: 'Card',
    props: {'title' : String, 
            'skill' : String,
            'skillColor' : String,
            'content' : String,
            'bar-percentage' : String,
            'tags' : String
    },
    computed: {
        titleColor() {return {'--text-color': this.skillColor}}
    }
}
</script>

<style>
.card:hover h1{
    color: var(--text-color);
    transition: .3s;
}
.card {
    display: flex; 
    position: relative;
    flex-direction: column;
    height: 350px;
    width: 450px;
    min-width: 200px;
    padding: 1.5rem;

    border-radius: 16px;
    background: #282828;
    box-shadow: -1rem 0 3rem #000;

    transition: .2s;
}
.card:hover {
    transform: translateY(-1rem);
    cursor: pointer;
}

.card:hover~.card{
    transform: translateX(130px);
}

.card:not(:first-child) {
    margin-left: -130px;
}

.bottom-card {
    position: absolute;
    bottom: 25px;
    left: 25px;
}
</style>