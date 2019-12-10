const axios = require("axios");

function fetchPosts() {
  return axios.get("http://crud-api.hypetech.xyz/v1/posts", {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "B1tD3V"
    }
  });
}

export default fetchPosts;
