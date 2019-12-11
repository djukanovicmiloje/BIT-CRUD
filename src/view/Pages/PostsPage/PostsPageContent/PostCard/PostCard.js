import React from "react";
import Column from "../../../../Components/Column/Column";
import Subtitle from "../../../../Components/Subtitle/Subtitle";
import "./PostCard.css";

const PostCard = ({ post }) => (
  <Column style="postCard" basis={1}>
    <Column basis={3}>
      <img className="postImage" src={post.imageUrl} alt="" />
    </Column>
    <Column basis={3}>
      <Subtitle text={post.title} />
    </Column>

  </Column>
);

export default PostCard;
