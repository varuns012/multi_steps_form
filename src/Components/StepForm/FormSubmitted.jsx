import { FileDoneOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import "./StepsForm.css";

function FormSubmitted(props) {
  const { navigation } = props;

  const testting = () => {
    navigation.previous();
  };
  return (
    <div className="container">
      <h1 className="heading">
        Successfully submitted <span className="done_icon">
        <FileDoneOutlined />
        </span>
      </h1>
    </div>
  );
}

export default FormSubmitted;
