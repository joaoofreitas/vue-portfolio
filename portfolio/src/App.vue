<template>
  <div id="app">
    <Header/>
    <ConsolePrint/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ConsolePrint from './components/ConsolePrint.vue'

export default {
  name: 'App',
  components: {
    Header,
    ConsolePrint
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap);

@font-face {
	font-family: 'Iosevka Web';
	font-display: swap;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	src: url(https://typeof.net/Iosevka//_next/static/chunks/fonts/iosevka-medium-30f62ff86a3c64ec77e6474a7419d1c4.woff2) format('woff2'), url(https://typeof.net/Iosevka//_next/static/chunks/fonts/iosevka-medium-f2eae4a506a51b3625b7b2ad064eb1ad.woff) format('woff'), url(https://typeof.net/Iosevka//_next/static/chunks/fonts/iosevka-medium-d14d7a475cf2b699ff8a98d1562e4dd9.ttf) format('truetype');
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
}


</style>
