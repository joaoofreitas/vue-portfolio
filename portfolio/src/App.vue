<template>
  <div id="app">
    <Header class="animate__animated animate__fadeIn"/>
    <ConsolePrint/>
    <CardsList class="animate__animated animate__slideInUp"/>
    <AboutMe id="about" titleColor="#bdae93" :aboutContent="lorem"/>
    
    <BigCard id="programming" title="Programming" titleColor="#bdae93" :content="lorem" bottom="Hello World">
      {{lorem}}
      <template v-slot:footer>
        <Tag nameTag="Hello World"/>
      </template>
    </BigCard>
    
    <BigCard id="servers" title="Server Management" titleColor="#bdae93">
      {{lorem}}
      <template v-slot:footer>
        <Tag nameTag="Hello World"/>
      </template>
    </BigCard>
    
    <BigCard id="electronics" title="Electronics" titleColor="#bdae93">
      {{lorem}}
      <template v-slot:footer>
        <Tag nameTag="Hello World"/>
      </template>
    </BigCard>
    
    <BigCard id="projects" title="Projects" titleColor="#bdae93">
      <Projects/>
      <template v-slot:footer>
        <Tag nameTag="Comming Soon!"/>
      </template>
    </BigCard>
  
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ConsolePrint from './components/ConsolePrint.vue'
import CardsList from './components/CardsList.vue'
import AboutMe from './components/AboutMe.vue'
import BigCard from './components/BigCard.vue'
import Tag from './components/Tag.vue'
import Projects from './components/Projects.vue'

import 'animate.css';




//import requests from '../backend/requests.js' //Importing backend stuff
//console.log(requests); // This is a temporary test

export default {
  name: 'App',
    data() {
      return {
        contents: {
          smallCard: {
            programming: "Programming stuff is good and stuff like that"
          },
          bigCard: {

          }
        },
        lorem : "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat"
    }
  },
  components: {
    Header,
    ConsolePrint,
    CardsList,
    AboutMe,
    BigCard,
    Tag,
    Projects
  }
}
</script>

<style>
@font-face {
	font-family: 'Iosevka';
	font-display: swap;
	font-weight: 100;
	font-stretch: normal;
	font-style: normal;
  src: url('/fonts/iosevka-regular.woff2') format('woff2'), url('/fonts/iosevka-regular-truetype.ttf') format('truetype');
	/*src: url(https://typeof.net/Iosevka//_next/static/chunks/fonts/iosevka-regular-589977d6df595706480452c885f3d06a.woff2) format('woff2'), url(https://typeof.net/Iosevka//_next/static/chunks/fonts/iosevka-regular-78fca4b917961a292915f8349435987b.woff) format('woff'), url(https://typeof.net/Iosevka//_next/static/chunks/fonts/iosevka-regular-f06a8fd6abee6bf78a2940a1ba51616a.ttf) format('truetype');*/

}

@font-face {
  font-family: 'Iosevka Bold';
  font-display: swap;
	font-stretch: normal;
	font-style: normal;
  font-weight: bold;
  src: url('/fonts/iosevka-bold.woff2') format('woff2');
}

#app {
  font-family: 'Iosevka';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 60px;

  background-repeat: no-repeat;
  background: rgb(36,36,36);
  background: -moz-linear-gradient(180deg, rgba(36,36,36,1) 0%, rgba(75,65,63,1) 100%);
  background: -webkit-linear-gradient(180deg, rgba(36,36,36,1) 0%, rgba(75,65,63,1) 100%);
  background: linear-gradient(180deg, rgba(36,36,36,1) 0%, rgba(75,65,63,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#242424",endColorstr="#4b413f",GradientType=1);
  
  }

html, body {
    margin: 0;
    height:100%;
    width:100%;
    padding:0;
    
    color: whitesmoke;
}

body h1, h2, h3, b {
  font-family: 'Iosevka Bold';
  color: #a7a4a3;
}
</style>

/* New ColorScheme
  white #d1d1d1
  black #242424
  gray: #827d7a
  lightBrown: #60534b
  darkBrown: #4b413f
*/
