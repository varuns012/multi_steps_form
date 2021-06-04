import { Button, Dropdown, Input, Menu, message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DownOutlined } from "@ant-design/icons";
import "./StepsForm.css";

function Hobbies(props) {
  const {
    formData,
    navigation,
    setSelectedHobbies,
    hobbiesType,
    selectedHobbies,
    selectedGender,
    setCustomHobInput,
    customHobInput,
    setCustomHobbies,
    customHobbies
  } = props;

  const formsData = useSelector((state) => state);
  const dispatch = useDispatch();

  const hobbiesFormNextHandle = () => {
    const data = {
      id: formsData[formsData.length - 1].id + 1,
      name: formData.name,
      age: formData.age,
      gender: selectedGender,
      addressone: formData.addressone,
      streetone: formData.streetone,
      addresstwo: formData.addresstwo,
      streettwo: formData.streettwo,
      phone: formData.phone,
      email: formData.email,
      hobbies: customHobInput || selectedHobbies,
    };
    if (customHobbies ===  false && selectedHobbies == "") {
      message.error("Please select the option first!");
    } else {
      dispatch({ type: "SAVE_FORMS", payload: data });
      navigation.next();
    }
  };

  const otherHobbies = (e) => {
    const custHob = e.target.value;

    setCustomHobInput(custHob);
  };
  const customHobbiesHandle = () => {
    setCustomHobbies(true);
  };

  const saveCustomHobHandle = () => {
    message.success(`Your selected ${customHobInput}`);
  };

  const hobbiesMenuHandle = ({ key }) => {
    setSelectedHobbies(hobbiesType[key]);
    message.success(`You selected ${hobbiesType[key]}`);
  };

  const menu = (
    <Menu onClick={hobbiesMenuHandle}>
      {hobbiesType.map((hob, index) => {
        return (
          <>
            <Menu.Item key={index}>{hob}</Menu.Item>
          </>
        );
      })}
      <Menu.Divider />
      <Button onClick={customHobbiesHandle}>Other Hobbies</Button>
     
    </Menu>
  );

  return (
    <div className="container">
      <h1 className="heading">Hobbies</h1>
      <Dropdown className="dropdown_hob" overlay={menu}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Your Hobbies <DownOutlined />
        </a>
      </Dropdown>
      {customHobbies ? (
        <>
          <Input
          className="add_hob"
            type="text"
            onChange={otherHobbies}
            placeholder="Enter your hobbies"
          />
          <Button className="add_hob_btn" type="primary" onClick={saveCustomHobHandle}>
            Add
          </Button>
        </>
      ) : null}
      <div>
        <Button
          className="prev_btn"
          onClick={() => navigation.previous()}
          type="primary"
        >
          Previous
        </Button>
        <Button
          className="nxt_btn"
          type="primary"
          onClick={hobbiesFormNextHandle}
        >
          Done
        </Button>
      </div>
    </div>
  );
}

export default Hobbies;
