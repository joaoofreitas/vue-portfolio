const axios = require('axios').default;
require('dotenv').config()

var repositories = {
  name: [],
  html_url: [],
  description: [],
  languages_url: []

};

axios.get('https://api.github.com/users/joaoofreitas/repos', { 'headers': { 'Authorization': process.env.TOKEN } })
  .then((response) => {
    for (i = 0; i < response.data.length; i++) {
      if (response.data[i].description != null) {
        repositories.name.push(response.data[i].name)
        repositories.html_url.push(response.data[i].html_url)
        repositories.description.push(response.data[i].description)
        repositories.languages_url.push(response.data[i].languages_url)
      } else {
        console.log(`The repositories ignored are: ${response.data[i].name}`)
      }
    }
    console.log(repositories);
  });
  

  /* Stuff to fetch:
    response.
        name
        html_url
        description
        languages_url

  */