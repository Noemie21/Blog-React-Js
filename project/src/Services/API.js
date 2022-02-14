let baseUrl = 'http://edu.project.etherial.fr'

export const getToken = () => {
    return localStorage.getItem('token')
}

export const login = async ({ email, password }) => {

    let response = await fetch(`${baseUrl}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })

    let json = await response.json()

    return json

}

export const signin = async ({ firstname, lastname, email, password}) => {

    let response = await fetch(`${baseUrl}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname : firstname,
            lastname: lastname,
            email: email,
            password: password,
            password_verif: password,
        })
    })

    let json = await response.json()

    return json

}

export const getUser = async () => {

    let response = await fetch(`${baseUrl}/users/me`, {
        method: 'GET',
        headers: {
            //'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    })

    let json = await response.json()

    return json.data

}

export const getArticles = async () => {

    let response = await fetch(`${baseUrl}/articles`, {
        method: 'GET',
        headers: {
            //'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    })

    let json = await response.json()

    return json.data

}

export const getArticle = async (id) => {

    let response = await fetch(`${baseUrl}/articles/${id}`, {
        method: 'GET',
        headers: {
            //'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    })

    let json = await response.json()

    return json.data

}

export const getCategories = async () => {

    let response = await fetch(`${baseUrl}/articles/categories`, {
        method: 'GET',
        headers: {
            //'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    })

    let json = await response.json()

    return json.data

}

export const newArticle = async ({ title, content, article_category_id}) => {

    let response = await fetch(`${baseUrl}/articles`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify({
            title : title, 
            content : content,
            category : article_category_id
        })
    })

    let json = await response.json()

    return json

}