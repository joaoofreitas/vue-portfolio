<template>
  <div id="app">
    <Header/>
    <ConsolePrint/>
    <CardsList/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ConsolePrint from './components/ConsolePrint.vue'
import CardsList from './components/CardsList.vue'

export default {
  name: 'App',
  components: {
    Header,
    ConsolePrint,
    CardsList
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap);

@font-face {
	font-family: 'Iosevka Web';
	font-display: swap;
	font-weight: 400;
	font-stretch: normal;
	font-style: normal;
	src: url(https://typeof.net/Iosevka//_next/static/chunks/fonts/iosevka-regular-589977d6df595706480452c885f3d06a.woff2) format('woff2'), url(https://typeof.net/Iosevka//_next/static/chunks/fonts/iosevka-regular-78fca4b917961a292915f8349435987b.woff) format('woff'), url(https://typeof.net/Iosevka//_next/static/chunks/fonts/iosevka-regular-f06a8fd6abee6bf78a2940a1ba51616a.ttf) format('truetype');
}

#app {
  font-family: Iosevka Web;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}


html, body {
    margin: 0;
    height:100%;
    width:100%;
    padding:0;
    background-color: #282828;
    color: whitesmoke;
}
</style>
