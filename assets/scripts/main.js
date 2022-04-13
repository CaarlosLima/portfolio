// function getGitHubProfileInfos() {
//   const url = 'https://api.github.com/users/CaarlosLima'
//   const userImage = document.querySelectorAll('.userImage')

//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       userName.textContent = data.name
//       userBio.textContent = data.bio
//       userBadge.textContent = data.name + ' | Portfólio Rocketseat'
//       userImage.forEach(image => {
//         image.src = data.avatar_url
//       })
//     })
// }
// getGitHubProfileInfos()

const xhr = new XMLHttpRequest()
const url = 'https://api.github.com/users/CaarlosLima'
xhr.open('GET', url)
xhr.addEventListener('load', function () {
  const userImage = document.querySelectorAll('.userImage')
  let data = JSON.parse(xhr.responseText)
  userName.textContent = data.name
  userBio.textContent = data.bio
  userBadge.textContent = data.name + ' | Portfólio Rocketseat'
  userImage.forEach(image => {
    image.src = data.avatar_url
  })
})
xhr.send()

document.querySelector('#btn').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode')
})
