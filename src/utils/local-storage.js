export const getAccessTokenFromLocalStorage = () => {
    return localStorage.getItem('access-token') ?? ''
}

export const setAccessTokenInLocalStorage = (token) => {
    localStorage.setItem('access-token', token)
}