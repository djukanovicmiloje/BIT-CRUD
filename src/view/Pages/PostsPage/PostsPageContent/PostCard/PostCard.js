import React from "react";
import Column from "../../../../SharedComponents/Column/Column";
import Title from "../../../../SharedComponents/Title/Title";
import "./PostCard.css";

const PostCard = ({ post }) => (
  <Column basis={1}>
    <Column basis={3}>
      <img className="postImage" src={post.imageUrl} alt="" />
    </Column>
    <Column basis={3}>
    <Title text={post.title} />
    </Column>
    
  </Column>
);

export default PostCard;
