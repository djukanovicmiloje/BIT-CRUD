const logout = () => {
    sessionStorage.clear();
    window.location.href = "";
}

export default logout;