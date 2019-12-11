import React from "react";
import Column from "../../Components/Column/Column";
import Icon from "../../Components/Icon/Icon";
import Title from "../../Components/Title/Title";

const DashBoardBox = ({ icon, number, text }) => (
  <Column style="dashboardBox" basis={1}>
    <Column basis={3}>
      <div className="dash_icon">
        <Icon icon={icon} />
      </div>
    </Column>
    <Column basis={3}>
      <Title text={number.toString()} />
    </Column>
    <Column basis={3}>
      <Title text={text} />
    </Column>
  </Column>
);

export default DashBoardBox;
