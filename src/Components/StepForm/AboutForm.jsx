import React from "react";
import "antd/dist/antd.css";
import { Button, Form, Input, message, Select } from "antd";
import { useSelector } from "react-redux";
import "./StepsForm.css";

const { Option } = Select;

function AboutForm(props) {
  const {
    formData,
    setForm,
    navigation,
    genderType,
    setSelectedGender,
    selectedGender,
  } = props;

  const { name, age, gender } = formData;

  const onGenderChange = (e) => {
    setSelectedGender(genderType[e]);
  };

  const aboutFormNextHandle = () => {
    if (selectedGender == "") {
      message.error("Please select the gender first!");
    } else {
      navigation.next();
    }
  };
  return (
    <div className="container">
      <h1 className="heading">About</h1>

      <Form onFinish={aboutFormNextHandle}>
        <div className="field_name">
          <label>Name</label>
          <Input
            name="name"
            value={name}
            onChange={setForm}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="field_name">
          <label>Age</label>
          <Input
            name="age"
            value={age}
            onChange={setForm}
            placeholder="Enter your age"
            required
          />
        </div>
        <div className="field_name">
          <label>Gender</label>
          <Select
            name="gender"
            style={{ width: "300px" }}
            placeholder="Select a option and change input text above"
            onChange={onGenderChange}
            allowClear
            value={selectedGender}
          >
            {genderType.map((gen, key) => {
              return (
                <Option key={key} value={key}>
                  {gen}
                </Option>
              );
            })}
          </Select>
        </div>
        <Button className="nxt_btn" type="primary" htmlType="submit" >
        Next
      </Button>
      </Form>

     
    </div>
  );
}

export default AboutForm;
