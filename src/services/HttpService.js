import Axios from "axios";


class HttpService {
    post(url, data, onSuccess, onFail) {
        Axios.post(url, data, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "B1tD3V"
            }
        }).then(response => onSuccess(response.data)).catch(error => onFail(error.response.data));
    }
    get(url, onSuccess, onFail) {
        Axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "B1tD3V"
            }
        }).then(response => onSuccess(response.data)).catch(error => onFail(error));
    }
}

export const http = new HttpService();