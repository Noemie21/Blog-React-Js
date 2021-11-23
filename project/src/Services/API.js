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