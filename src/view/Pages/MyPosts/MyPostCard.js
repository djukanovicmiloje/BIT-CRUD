import React from "react";
import Column from "../../Components/Column/Column";
import Title from "../../Components/Title/Title";
import { Link } from "react-router-dom";
import Icon from "../../Components/Icon/Icon";
import Button from "../../Components/Button/Button";
import { userRequsets } from "../../../services/userFetch";
import Row from "../../Components/Row/Row";

const MyPostCard = ({ post, reload }) => (
  <Row>
    <Column>
      <Title text={post.title} />
    </Column>
    <Column>
      <Column>
        <Link to={`/update/${post.id}`}>
          <div className="post_icon">          
            <Icon icon="edit" />
          </div>
        </Link>
      </Column>
      <Column>
        <Button
          onClick={() => {
            userRequsets.deletePost(post.id);
            reload();
          }}
          icon="trash"
          color="red"
        />
      </Column>
    </Column>
  </Row>
);

export default MyPostCard;
