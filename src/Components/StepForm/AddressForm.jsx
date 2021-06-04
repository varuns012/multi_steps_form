import { Input, Form, Button, message } from "antd";
import React from "react";
import "./StepsForm.css";

function AddressForm(props) {
  const { formData, setForm, navigation } = props;

  const { addressone, streetone, addresstwo, streettwo } = formData;

  const addressFormPrevHandle = () => {
    navigation.previous();
  };
  const addressFormNextHandle = () => {
    if (
      addressone == "" ||
      streetone == "" ||
      addresstwo == "" ||
      streettwo == ""
    ) {
      message.error("Please fill remaing field first!");
    } else {
      navigation.next();
    }
  };
  return (
    <div className="container">
      <h1 className="heading address_type_title">Primary Address</h1>
      <Form onFinish={addressFormNextHandle}>
        <div className="field_name">
          <label>Address One</label>
          <Input
            name="addressone"
            value={addressone}
            onChange={setForm}
            placeholder="Enter your address"
            required
          />
        </div>

        <div className="field_name">
          <label>Street Number</label>
          <Input
            name="streetone"
            value={streetone}
            onChange={setForm}
            placeholder="Enter your street number"
            required
          />
        </div>
        <h className="heading address_type_title">Secondary Address</h>

        <div className="field_name">
          <label>Address Two</label>
          <Input
            name="addresstwo"
            value={addresstwo}
            onChange={setForm}
            placeholder="Enter your address"
            required
          />
        </div>

        <div className="field_name">
          <label>Street Number</label>
          <Input
            name="streettwo"
            value={streettwo}
            onChange={setForm}
            placeholder="Enter your street number"
            required
          />
        </div>

        <Button
          className="prev_btn"
          onClick={addressFormPrevHandle}
          type="primary"
        >
          Previous
        </Button>
        <Button
          className="nxt_btn"
          type="primary"
          htmlType="submit"
        >
          Next
        </Button>
      </Form>
    </div>
  );
}

export default AddressForm;
