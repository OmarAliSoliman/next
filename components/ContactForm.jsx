import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import axios from "axios";
import { contactus_api } from "./API";

function ContactForm() {
  const simpleValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();
  const [inputs, setInputs] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    message: "",
  });

  const onchangeInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const sendForm = (e) => {
    e.preventDefault();
    if (simpleValidator.current.allValid()) {

      axios.post(`${contactus_api}`, {data:inputs}).then((res)=>{
        if(res.status === 200){
          console.log(res)
          toast.success(`message was send successfully`, {position: toast.POSITION.TOP_CENTER})
        }
      })
    } else {
      simpleValidator.current.showMessages();
      forceUpdate(1);
      toast.error(`please check your information`, {position: toast.POSITION.TOP_CENTER})
      // toast.error(`برجاء التاكد من البيانات`);
      // simpleValidator.current.autoForceUpdate();
      // setLoading(false);
    }
  };

  return (
    <>
      <form action="" onSubmit={sendForm}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={onchangeInput}
            name="Name"
            value={inputs.Name}
            placeholder="Name"
            onBlur={() => simpleValidator.current.showMessageFor("Name")}
          />
          <div className="error">
            {simpleValidator.current.message("Name", inputs.Name, "required")}
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={onchangeInput}
            name="Email"
            value={inputs.Email}
            placeholder="Email Address"
            onBlur={() => simpleValidator.current.showMessageFor("Email")}
          />
          <div className="error">
            {simpleValidator.current.message("Email", inputs.Email, "required")}
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={onchangeInput}
            name="PhoneNumber"
            value={inputs.PhoneNumber}
            placeholder="Phone Number"
            onBlur={() => simpleValidator.current.showMessageFor("PhoneNumber")}
          />
          <div className="error">
            {simpleValidator.current.message("PhoneNumber", inputs.PhoneNumber, "required")}
          </div>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            onChange={onchangeInput}
            name="message"
            value={inputs.message}
            placeholder="write Your Message"
            onBlur={() => simpleValidator.current.showMessageFor("message")}
          ></textarea>
          <div className="error">
            {simpleValidator.current.message(
              "message",
              inputs.message,
              "required"
            )}
          </div>
        </div>
        <div className="btn_submit">
          <button className="btn" type="submit">
            Send
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
