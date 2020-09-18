<template>
    <div class='tag'>
        <span>{{nameTag}}</span>
    </div>
    
</template>

<script>
export default {
    name: 'Tags',
    props: {
        nameTag: String
    }
}
</script>

<style scoped>
    .tag {
        margin: 10px;
    }

    .tag span{
        display: inline-flex;
        flex-direction: row;

        padding: 3px 6px 3px 6px;
        background: #bdae9333;
        color: #bdae93;
        border-radius: 4px;

        font-size: 14px;
        overflow: hidden;
        
    }
</style>