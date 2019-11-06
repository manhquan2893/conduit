
function getToken(){
    return localStorage.getItem("id_token")
}
function setToken(token){
    localStorage.setItem("id_token",token)
}
function removeToken(){
    localStorage.removeItem("id_token")
}
export default {
    getToken,
    setToken,
    removeToken
}