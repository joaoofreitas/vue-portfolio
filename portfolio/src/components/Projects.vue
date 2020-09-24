<template>
    <div>
        <div v-for="repos in api" :key="repos">
            <div v-for="index in repos" :key="index"> {{index[0]}}</div>

        </div>
    </div>
</template>

<script>
const axios = require('axios').default;
require('dotenv').config()

export default {
    name: 'Projects',
    data () {
        return {
            api: {
                repositories: null,
            }
    }
  },
  mounted () {
    axios.get('https://api.github.com/users/joaoofreitas/repos', { 'headers': { 'Authorization': process.env.TOKEN } })
    .then((response) => {
      let repos = {
        name: [],
        html_url: [],
        description: [],
      };
      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].description != null) {
          repos.name.push(response.data[i].name)
          repos.html_url.push(response.data[i].html_url)
          repos.description.push(response.data[i].description)
        } else {
          console.log(`The repositories ignored are: ${response.data[i].name}`)
        }
      }
      this.api.repositories = repos
    })
  }
}
</script>

<style scoped>

</style>