<template>
  <div id="app">
    <Header/>
    <ConsolePrint/>
    <CardsList/>
    <BigCard title="About Me" :content="lorem" bottom="Hello World"/>
    <BigCard title="Programming" :content="lorem" bottom="Hello World"/>
    <BigCard title="Projects" :content="lorem" bottom="Hello World"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ConsolePrint from './components/ConsolePrint.vue'
import CardsList from './components/CardsList.vue'
import BigCard from './components/BigCard.vue'

export default {
  name: 'App',
    data() {
      return {
        lorem : "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat"
    }
  },
  components: {
    Header,
    ConsolePrint,
    CardsList,
    BigCard
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
  padding-top: 60px;
  padding-bottom: 60px;

  background-repeat: no-repeat;
  background: rgb(29,32,33);
  background: -moz-linear-gradient(360deg, rgba(29,32,33,1) 0%, rgba(43,43,42,1) 50%, rgba(60,56,54,1) 100%);
  background: -webkit-linear-gradient(360deg, rgba(29,32,33,1) 0%, rgba(43,43,42,1) 50%, rgba(60,56,54,1) 100%);
  background: linear-gradient(360deg, rgba(29,32,33,1) 0%, rgba(43,43,42,1) 50%, rgba(60,56,54,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1d2021",endColorstr="#3c3836",GradientType=1);
}

html, body {
    margin: 0;
    height:100%;
    width:100%;
    padding:0;
    
    color: whitesmoke;
}
</style>
