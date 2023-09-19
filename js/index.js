const searchForm = document.querySelector('form')
searchForm.addEventListener('submit',(e) => {
    e.preventDefault()
    const searchTerm = e.target.search.value
    fetch(`https://api.github.com/search/users?q=${searchTerm}`,{
        headers: {
            Accept: 'application/vnd.github.v3+json'
        }
    }).then(r => r.json())
    .then(info => {
        for (user of info.items){
            createUser(user)
        }
    })
    e.target.reset()
})

const userList = document.querySelector('#user-list')

function createUser(result){
    const userLi = document.createElement('li')
    const userLogin = document.createElement('h2')
    userLogin.textContent = result.login
    const userAvatar = document.createElement('img')
    userAvatar.src = result.avatar_url
    const userUrl = document.createElement('a')
    userUrl.href = result.html_url
    userUrl.textContent = result.html_url
    userLi.append(userAvatar, userLogin, userUrl)
    userList.append(userLi)
}

