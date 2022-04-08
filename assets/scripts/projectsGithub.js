const xhrRepos = new XMLHttpRequest()
const urlRepos = 'https://api.github.com/users/CaarlosLima/repos'
xhrRepos.open('GET', urlRepos)
xhrRepos.addEventListener('load', function () {
  let data = JSON.parse(xhrRepos.responseText)
  for (let i = 0; data.length; i++) {
    if (data[i].name != 'CaarlosLima' && data[i].name != 'portfolio') {
      addRepos(data[i])
    }
  }
})
xhrRepos.send()

function addRepos(repos) {
  const myProjectsBody = document.querySelector('.myProjects__body')
  const reposSection = buildProject(repos)
  myProjectsBody.appendChild(reposSection)
}

function buildProject(repos) {
  const reposAncor = document.createElement('a')
  reposAncor.href = repos.html_url
  reposAncor.classList.add('card')
  reposAncor.classList.add('myProjects__body__project')

  reposAncor.appendChild(buildH3(repos.name, 'project__title'))
  reposAncor.appendChild(buildP(repos.description, 'project__desc'))
  reposAncor.appendChild(buildDivFooter(repos, 'project__footer'))
  return reposAncor
}

function buildH3(dado, classe) {
  const h3 = document.createElement('h3')
  h3.textContent = dado
  h3.classList.add(classe)
  return h3
}

function buildP(dado, classe) {
  const p = document.createElement('p')
  p.textContent = dado
  p.classList.add(classe)
  return p
}

function buildDivFooter(dado, classe) {
  const divFooter = document.createElement('div')
  divFooter.appendChild(buildDivComs(dado, 'project__coms'))
  divFooter.appendChild(buildP(dado.language, 'project__language'))

  divFooter.classList.add(classe)
  return divFooter
}

function buildDivComs(dado, classe) {
  const divComs = document.createElement('div')
  divComs.appendChild(buildP(dado.stargazers_count, 'project__stars'))
  divComs.appendChild(buildP(dado.forks_count, 'project__shares'))
  divComs.classList.add(classe)
  return divComs
}
