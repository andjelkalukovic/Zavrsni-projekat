let state = {
    token: null
}
const setToken = (token) => {
    state.token = token;
    localStorage.setItem('token', token);
}

const getToken = () => {
    const token = state.token ? state.token :
        localStorage.getItem('token') ? localStorage.getItem('token') :
            null;
    return token;
}

const isLogin = () => {
    return state.token || localStorage.getItem('token');
}

const authHeader = ()=>{
    if(isLogin()){
        return {'Authorization' : getToken()}
    }
    else {
        return {}
    }
}

const logOutUser = () => {
    return new Promise (resolve => {
        state.token = null;
        state.id = null
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        resolve();
    })
}

const setId = (id) => {
    state.id = id;
    localStorage.setItem('id',id)
}

export { setToken, getToken, isLogin, authHeader, logOutUser, setId };