<template>
    <section class="card-list">
        <div class="card">
            <header class="card-header">
                <p>{{skills.Programming[0]}}</p>
                <h2> </h2>
            </header>
        </div>
        <div class="card">
            <header class="card-header">
                <p>{{skills.Programming[0]}}</p>
                <h2> </h2>
            </header>
        </div>
        <div class="card">
            <header class="card-header">
                <p>{{skills.Programming[0]}}</p>
                <h2> </h2>
            </header>
        </div>
        <div class="card">
            <header class="card-header">
                <p>{{skills.Programming[0]}}</p>
                <h2> </h2>
            </header>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            skills:{
                DevOps: ['DevOps','Docker', 'AWS EC2'],
                Programming: ['Programming','Python', 'C++','C', 'Javascript', 'Go'], 
                Frameworks: ['Frameworks','NodeJS', 'Vue' , 'React'],
                OS : ['OS','GNU/Linux']
            }
        }
    }
}
</script>

<style>
.card-list {
    display: flex;
    padding: 3rem;
    overflow-x: scroll;
}

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

.card-list::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

.card-list::-webkit-slider-thumb {
    background: #201c29;
    border-radius: 10px;
    box-shadow: inset 2px 2px 2px hsla(0,0%,100%,.25), inset -2px -2px 2px rgba(0,0,0,.25);
}

.card-list::-webkit-scrollbar-track{
    background: linear-gradient(90deg,#201c29,#201c29 1px,#17141d 0,#17141d);
}

.card:hover {
    transform: translateY(-1rem);
}

.card:hover~.card {
    transform: translateX(130px);
}

.card:not(:first-child) {
    margin-left: -130px;
}


</style>