// async request
//const title = document.querySelector('.title')
//const myLocation = document.querySelector('.location');

//let data = fetch('https://api.github.com/users/mirandamon').then((response) => {
//  return response.json()
// title.innerHTML = responseJson.login

//console.log(data)
//console.log('hello')

let input = document.querySelector('#search-box')
input.addEventListener('keydown', (event) => {
  // start searching

  let value = input.value
  // fetch
  const configuration = {
    mode: 'no-cors',
    headers: {
      'Authorization': 'token cendriss:2563bbba27b24173866e4914220947368876e516 ' 
    }
  }
  fetch('https://api.github.com/search/repositories?q=' + value, configuration)
    .then(apiResponse => apiResponse.json())
    .then(responseJson => console.log(responseJson))
})

// search