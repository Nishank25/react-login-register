import axios from 'axios'

export async function LoginData(userData){
    return axios
    .post(
        'http://10.0.28.112:2512/api/login',
        {
            email: userData.email,
            password: userData.password
        },
        {
            headers: { 'Content-Type': 'application/json' }
        }
    )
    .then(response => {
        localStorage.setItem('usertoken', response.data.token)
        return response.data.token
    })
    .catch(err => {
        console.log(err)
    })
}
export async function RegisterData(userData){
    return axios
    .post('http://10.0.28.112:2512/api/register', userData,{
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })
}

export async function GetProfile(usertoken){
    let baseUrl='http://10.0.28.112:2512/api/';
    return axios
        .get(baseUrl+'profile', {
            headers: { Authorization: `Bearer ${usertoken}` }
        })
        .then(response => {
            console.log(response)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}
export async function editData(userData){
    return axios
    .post('http://10.0.28.112:2512/api/edit', userData,{
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })
}
