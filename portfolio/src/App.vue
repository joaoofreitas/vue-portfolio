<template>
  <div id="app">
    <Header class="animate__animated animate__fadeIn"/>
    <ConsolePrint/>
    <CardsList class="animate__animated animate__slideInUp">

      <template v-slot:programming>
        Here I talk about my programming skills, languages and frameworks often used.
      </template>
      <template v-slot:programming-tags>
        <Tag nameTag="C"/>
        <Tag nameTag="C++"/>
        <Tag nameTag="C#"/>
        <Tag nameTag="Python"/>
        <Tag nameTag="JavaScript"/>
      </template>

      <template v-slot:server>
        Here I talk about my knowledge about servers and networking.
      </template>
      <template v-slot:server-tags>
        <Tag nameTag="GNU/Linux"/>
        <Tag nameTag="AWS"/>
        <Tag nameTag="Azure"/>
        <Tag nameTag="Docker"/>
        <Tag nameTag="CCNA"/>
      </template>

      <template v-slot:electronics>
        Here I talk about my path in electronics and how did it influence me starting to write code.
      </template>
      <template v-slot:electronics-tags>
        <Tag nameTag="Digital Electronics"/>
        <Tag nameTag="IoT"/>
        <Tag nameTag="Microcontrollers"/>
        
      </template>

      <template v-slot:projects>
        My public GitHub repositories and open-source projects.
      </template>
      <template v-slot:projects-tags>
        <Tag nameTag="Open-Source"/>
        <Tag nameTag="GitHub"/>
      </template>

    </CardsList>

    <AboutMeStruct id="about" titleColor="#bdae93">
      <AboutMe/>
    </AboutMeStruct>
    
    <BigCard id="programming" title="Programming" titleColor="#bdae93">
      <Programming/>
      <template v-slot:footer>
        <Tag nameTag="Compiled Sucessfully!"/>
      </template>
    </BigCard>
    
    <BigCard id="servers" title="Server Management" titleColor="#bdae93">
      <Server/>
      <template v-slot:footer>
        <Tag nameTag="Running..."/>
      </template>
    </BigCard>
    
    <BigCard id="electronics" title="Electronics" titleColor="#bdae93">
      <Electronics/>
      <template v-slot:footer>
        <Tag nameTag="Are you a 1 or a 0?"/>
      </template>
    </BigCard>
    
    <BigCard id="projects" title="Projects" titleColor="#bdae93">
      <Projects/>
      <template v-slot:footer>
        <Tag nameTag="Comming Soon!"/>
      </template>
    </BigCard>

    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ConsolePrint from './components/ConsolePrint.vue'
import CardsList from './components/CardsList.vue'
import AboutMeStruct from './components/AboutMeStructure.vue'
import BigCard from './components/BigCard.vue'
import Tag from './components/Tag.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'

import AboutMe from './components/content/AboutMe.vue'
import Programming from './components/content/Programming.vue'
import Server from './components/content/Server.vue'
import Electronics from './components/content/Electronics.vue'

import 'animate.css';

export default {
  name: 'App',
    data() {
      return {}
  },
  components: {
    Header,
    ConsolePrint,
    CardsList,
    AboutMeStruct,
    BigCard,
    Tag,
    Projects,
    Footer,

    AboutMe,
    Programming,
    Server,
    Electronics
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
  padding: 60px 0vw 60px 0vw;

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
    width: 100%;
    padding: 0;
    
    background: rgb(36,36,36);
    color: whitesmoke;
}

body h1, h2, h3, b {
  font-family: 'Iosevka Bold';
  color: #a7a4a3;
}

@media (max-width: 768px){
  body {
    font-size: 14px;
  }
 .animate__slideInUp {
   display: none;
 }
}
</style>
