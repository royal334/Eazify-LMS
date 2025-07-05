export const storeToken = (token: string) => {
    localStorage.setItem('accessToken', token);
}

export const getToken = () => {
    return localStorage.getItem('accessToken');
}

export const removeToken = () => {
    localStorage.removeItem('accessToken');
}

export const isAuthenticated = () => {
    return getToken() !== null;
}