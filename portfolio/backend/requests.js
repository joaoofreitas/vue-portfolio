const axios = require('axios').default;
require('dotenv').config()

axios.get('https://api.github.com/users/joaoofreitas/repos', { 'headers': { 'Authorization': process.env.TOKEN } })
    .then((response) => {
    // handle success
    console.log(response);
  })
    .catch((error) => {
    // handle error
    console.log(error);
  })
    .then(() => {
    // always executed
  });
  

  /* Stuff to fetch:
    response.
        name
        html_url
        description
        languages_url

  */