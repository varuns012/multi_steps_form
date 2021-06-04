import { Button, Input, message } from "antd";
import React from "react";
import "./StepsForm.css";

function Contact(props) {
  const { formData, setForm, navigation } = props;

  const { phone, email } = formData;

  const contactFormPrevHandle = () => {
    navigation.previous();
  };

  const contactFormNextHandle = () => {
    if (phone == "" || email == "") {
      message.error("Please fill remaing field first!");
    } else {
      navigation.next();
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Contact</h1>
      <div className="field_name">
        <label>Phone</label>
        <Input
          required="true"
          name="phone"
          value={phone}
          onChange={setForm}
          placeholder="Enter your phone number"
        />
      </div>

      <div className="field_name">
        <label>Email</label>
        <Input
          name="email"
          value={email}
          onChange={setForm}
          placeholder="Enter your email"
        />
      </div>

      <Button className="prev_btn" onClick={contactFormPrevHandle} type="primary">
        Previous
      </Button>
      <Button className="nxt_btn" onClick={contactFormNextHandle} type="primary">
        Next
      </Button>
    </div>
  );
}

export default Contact;
