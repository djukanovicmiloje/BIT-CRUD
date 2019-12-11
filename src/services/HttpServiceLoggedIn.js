import Axios from "axios";

const accessToken = sessionStorage.getItem("accessToken");
const config = {
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "B1tD3V",
    Authorization: "Bearer " + accessToken
  }
};

class HttpServiceLoggedIn {
  post(url, data, onSuccess, onFail) {
    Axios.post(url, data, config)
      .then(response => onSuccess(response.data))
      .catch(error => onFail(error.response.data));
  }
  get(url, onSuccess, onFail) {
    Axios.get(url, config)
      .then(response => onSuccess(response.data))
      .catch(error => onFail(error));
  }
  put(url, data, onSuccess, onFail) {
    Axios.put(url, data, config)
      .then(response => onSuccess(response.data))
      .catch(error => onFail(error.response.data));
  }
  delete(url) {
    Axios.delete(url, config);
  }
}

export const users = new HttpServiceLoggedIn();
