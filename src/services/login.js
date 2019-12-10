const axios = require("axios");

function login(loginInfo) {
    return axios.post("http://crud-api.hypetech.xyz/v1/auth/login", loginInfo, {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V"
        }
    });
}

export default login;
