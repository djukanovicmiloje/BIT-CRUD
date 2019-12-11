import { users } from "./HttpServiceLoggedIn";

class userFetch{
    posts(onSucces){
        users.get("http://crud-api.hypetech.xyz/v1/posts", onSucces)
    }
    users(onSucces){
        users.get("http://crud-api.hypetech.xyz/v1/users", onSucces)
    }
    comments(onSucces){
        users.get("http://crud-api.hypetech.xyz/v1/comments", onSucces)
    }
    myPosts( onSucces){
        console.log(sessionStorage.getItem('userId'))
        users.get(`http://crud-api.hypetech.xyz/v1/posts?userId=${sessionStorage.getItem('userId')}`, onSucces)
    }
    singlePost(postId, onSucces){
        users.get(`http://crud-api.hypetech.xyz/v1/posts/${postId}`, onSucces)
    }
    updatePost(postId,data, onSucces){
        users.put(`http://crud-api.hypetech.xyz/v1/posts/${postId}`,data, onSucces, console.log)
    }
    deletePost(postId){
        users.delete(`http://crud-api.hypetech.xyz/v1/posts/${postId}`)
    }
}

export const userRequsets = new userFetch();