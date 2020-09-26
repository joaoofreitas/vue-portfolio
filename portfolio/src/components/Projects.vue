<template>
    <div>
      <div v-for="index in reposNames" :key="index">
              <a>{{reposNames}}</a>
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
            reposNumber: null,
            reposNames: null,
            reposDescription: null
    }
  },
  mounted () {
    axios.get('https://api.github.com/users/joaoofreitas/repos', { 'headers': { 'Authorization': process.env.TOKEN } })
    .then((response) => {
      let repoNames = []
      let repoDescription = []

      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].description != null) {
          repoNames.push(response.data[i].name)
          // repos.html_url.push(response.data[i].html_url)
          repoDescription.push(response.data[i].description)
        } else {
          console.log(`The repositories ignored are: ${response.data[i].name}`)
        }
      }
      console.log(repoNames)
      console.log(repoDescription)

      this.reposNames = repoNames
      this.reposDescription = repoDescription
    })
  }
}
</script>

<style scoped>

</style>