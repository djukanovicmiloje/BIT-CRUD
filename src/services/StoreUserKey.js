var jwt = require('jsonwebtoken');

function storeUserKey(response){
    let user = jwt.decode(response.data.accessToken);
    sessionStorage.setItem("accessToken", response.data.accessToken); 
    sessionStorage.setItem("userId", user.id.toString());
    sessionStorage.setItem("loggedIn", "true"); 
}

export default storeUserKey;