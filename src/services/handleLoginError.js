const handleLoginError = (response) => {
    const { error, message } = response;

    let loginError = {
        email: "",
        password: ""
    };

    switch (error) {
        case "Unprocessable Entity":
            if (message.split(" ")[0] === "Passwords") {
                loginError.password = "Wrong Password"
            }
            if (message.split(" ")[0] === "User") {
                loginError.email = "User doesn\'t exist"
            }
            break;
        case "ValidationError":
            if (message.split(" ")[1] === "\"email\"") {
                loginError.email = "Invalid Email"
            }
            if (message.split(" ")[1] === "\"password\"") {
                loginError.password = "Invalid Password"
            }
            break;
    }
    return loginError;
}
export default handleLoginError;