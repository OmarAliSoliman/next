import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import axios from "axios";
import { contactus_api } from "./API";
import SpinnerLoading from "./SpinnerLoading";

function ContactForm() {
  const simpleValidator = useRef(new SimpleReactValidator());
  const [loading, setLoading] = useState(false);
  const [, forceUpdate] = useState();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [inputs, setInputs] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    message: "",
  });

  const onchangeInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };


  const blurMessages = (type) => {
    simpleValidator.current.showMessageFor(type)
    setSubmitSuccess(false);
  }


  const sendForm = (e) => {
    setLoading(true);
    e.preventDefault();
    
    if (simpleValidator.current.allValid()) {
      // console.log(inputs)
      axios.post(`${contactus_api}`, { data: inputs }).then((res) => {
        if (res.status === 200) {
          // console.log(res);
          toast.success(`message was send successfully`, {
            position: toast.POSITION.TOP_CENTER,
          });
          setLoading(false);
          inputs.Name="";
          inputs.Email="";
          inputs.PhoneNumber="";
          inputs.message="";

          setSubmitSuccess(true);
        }
      });
    } else {
      simpleValidator.current.showMessages();
      forceUpdate(1);
      toast.error(`please check your information`, {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);
      setSubmitSuccess(false);
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
            onBlur={()=>blurMessages("Name")}
          />
          {!submitSuccess ? (
            <div className="error">
              {simpleValidator.current.message("Name", inputs.Name, "required")}
            </div>
          ) : null}
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={onchangeInput}
            name="Email"
            value={inputs.Email}
            placeholder="Email Address"
            onBlur={()=>blurMessages("Email")}
          />
          {!submitSuccess ? (
            <div className="error">
              {simpleValidator.current.message(
                "Email",
                inputs.Email,
                "required"
              )}
            </div>
          ) : null}
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={onchangeInput}
            name="PhoneNumber"
            value={inputs.PhoneNumber}
            placeholder="Phone Number"
            onBlur={()=>blurMessages("PhoneNumber")}
          />
          {!submitSuccess ? (
            <div className="error">
              {simpleValidator.current.message(
                "PhoneNumber",
                inputs.PhoneNumber,
                "required"
              )}
            </div>
          ) : null}
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            onChange={onchangeInput}
            name="message"
            value={inputs.message}
            placeholder="write Your Message"
            onBlur={()=>blurMessages("message")}
          ></textarea>
          {!submitSuccess ? (
            <div className="error">
              {simpleValidator.current.message(
                "message",
                inputs.message,
                "required"
              )}
            </div>
          ) : null}
        </div>
        <div className="btn_submit">
          {loading ? (
            <SpinnerLoading />
          ) : (
            <button className="btn" type="submit">
              Send
            </button>
          )}
        </div>
      </form>
    </>
  );
}

export default ContactForm;
