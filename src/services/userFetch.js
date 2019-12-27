import { users } from "./HttpServiceLoggedIn";

class userFetch {
  posts(onSuccess) {
    users.get("http://crud-api.hypetech.xyz/v1/posts", onSuccess, console.log);
  }

  users(onSuccess) {
    users.get("http://crud-api.hypetech.xyz/v1/users", onSuccess);
  }

  comments(onSuccess) {
    users.get("http://crud-api.hypetech.xyz/v1/comments", onSuccess);
  }

  myPosts(onSuccess) {
    users.get(
      `http://crud-api.hypetech.xyz/v1/posts?userId=${sessionStorage.getItem(
        "userId"
      )}`,
      onSuccess
    );
  }

  singlePost(postId, onSuccess) {
    users.get(
      `http://crud-api.hypetech.xyz/v1/posts/${postId}`,
      onSuccess,
      console.log
    );
  }

  updatePost(postId, data, onSuccess) {
    users.put(
      `http://crud-api.hypetech.xyz/v1/posts/${postId}`,
      data,
      onSuccess,
      console.log
    );
  }

  deletePost(postId) {
    users.delete(`http://crud-api.hypetech.xyz/v1/posts/${postId}`);
  }
}

export const userRequsets = new userFetch();
