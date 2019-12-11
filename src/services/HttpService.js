import Axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "B1tD3V"
  }
};

class HttpService {
  post(url, data, onSuccess, onFail) {
    Axios.post(url, data, config)
      .then(response => onSuccess(response))
      .catch(error => onFail(error.response.data));
  }
  get(url, onSuccess, onFail) {
    Axios.get(url, config)
      .then(response => onSuccess(response.data))
      .catch(error => onFail(error));
  }
}

export const http = new HttpService();
