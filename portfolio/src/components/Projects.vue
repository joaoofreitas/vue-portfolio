<template>
  <div class="container">
    <div class="content" v-for="len in repositories.name.length " :key="len">
      <h2> 
        <a :href="`${repositories.html_url[len - 1]}`">
        {{repositories.name[len - 1]}}
        </a>
      </h2>
      <p>{{repositories.description[len - 1]}}</p>
      <Tag :nameTag="`${repositories.language[len -1]}`"/>
    </div>
  </div>
</template>

<script>
import Tag from './Tag'

const axios = require('axios').default;
require('dotenv').config()

export default {
    name: 'Projects',
    data () {
        return {
            repositories: null
    }
  },
  components: {
    Tag
  },
  mounted () {
    axios.get('https://api.github.com/users/joaoofreitas/repos', { 'headers': { 'Authorization': process.env.TOKEN } })
    .then((response) => {
      let repos = {
        name: [],
        description: [],
        html_url: [],
        language: []
      }
      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].description != null) {
          repos.name.push(response.data[i].name)
          repos.html_url.push(response.data[i].html_url)
          repos.description.push(response.data[i].description)
          repos.language.push(response.data[i].language)
        } 
        else {
          console.log(`The repositories ignored are: ${response.data[i].name}`)
        }
      }
      console.log(response.data)
      this.repositories = repos
    })
  }
}
</script>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, 500px);
    justify-content: center;
    width: 100%;
  }

  .content {
    flex: 1;
    margin-left: 40px;
    margin-right: 40px;
    padding: 20px;
    border-bottom: 1px solid whitesmoke;
  }

  h2 a {
    color: #a7a4a3;
    text-decoration: none;
  }

  .content-divider {
        margin-bottom: 25px;
        width: 100%;
        align-self: center;
        border-bottom: 1px solid whitesmoke;
  }
</style>