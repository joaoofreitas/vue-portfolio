<template>
    <section>
        <article class="card-class">
            <header class="card-header-class">
                <button @click='clickme'></button>
                <p>{{cards[numberOfClicks]}}</p>
            </header>
        </article>
    </section>
</template>

<script>

export default {
    data() {
        return {
            cards:['Docker', 'Python', 'Node'],
            numberOfClicks: 0
        }
    },
    methods: {
        clickme: () => {
            console.log("Click")
            this.numberOfClicks = this.numberOfClicks + 1
        }
    }
}
</script>

<style>

</style>