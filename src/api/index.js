const BASE_URL = 'http://localhost:3001/api'

export async function loginUser(email_address, password) {
    try{
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email_address,
                password
            })
        })
        const result = await response.json()
        return result;
    } catch(error){
        console.error('Error logging in user from src', error)
    }
}