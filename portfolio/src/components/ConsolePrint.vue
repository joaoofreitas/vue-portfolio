<template>
  <div>
    <vue-typer text="Hello, I'm João and I'm a Software Developer" :repeat='0' :type-delay='45' caret-animation='blink'> </vue-typer>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  components: {
    VueTyper
  }
}
</script>

<style>
.vue-typer .custom.char.typed {
  font-size: 20px;
  color: #d1d1d1
}

.vue-typer .custom.caret {
  text-decoration: overline;
  background-color: #bdae93;
}

@media (max-width: 768px){
  .vue-typer .custom.char.typed {
    font-size: 16px;
    color: #d1d1d1
  }
}
</style>