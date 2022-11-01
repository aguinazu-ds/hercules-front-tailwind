import axios from 'axios';

const API_URL = 'http://localhost:8081/api/v1';

const login = async (rutEmpresa ,username, password) => {
    return await axios.post(API_URL + `/${rutEmpresa}/auth/signin`, {
        username,
        password,
    })
    .then((response) => {
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    });
};

const AuthService = {
    login,
}

export default AuthService;
