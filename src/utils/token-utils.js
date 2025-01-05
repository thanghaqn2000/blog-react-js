const decodeJWT = (token) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64));
  } catch (error) {
    return null;
  }
};

const isExpiredToken = (token) => {
  const decodedToken = decodeJWT(token);
  return decodedToken && decodedToken.exp * 1000 < Date.now();
};

const setToken = (accessToken, refreshToken ) => {
  localStorage.setItem('access_token',accessToken);
  localStorage.setItem('refresh_token', refreshToken);
}

export { isExpiredToken, setToken };
