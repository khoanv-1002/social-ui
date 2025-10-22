export const ACCESS_TOKEN = 'accessToken';
export const REFRESH_TOKEN = 'refreshToken';

export const getAccessToken = () => {
    return localStorage.getItem(ACCESS_TOKEN);
}

export const getRefreshToken = () => {
    return localStorage.getItem(REFRESH_TOKEN);
}

export const setAccessToken = (accessToken) => {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
}

export const setRefreshToken = (refreshToken) => {
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
}

export const removeAccessToken = () => {
    localStorage.removeItem(ACCESS_TOKEN);
}

export const removeRefreshToken = () => {
    localStorage.removeItem(REFRESH_TOKEN);
}
