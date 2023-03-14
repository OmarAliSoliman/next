import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";

function ContactForm() {
  const simpleValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onchangeInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const sendForm = (e) => {
    e.preventDefault();
    if (simpleValidator.current.allValid()) {
      toast.success(`message was send successfully`, {position: toast.POSITION.TOP_CENTER})
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
            name="name"
            value={inputs.name}
            placeholder="Name"
            onBlur={() => simpleValidator.current.showMessageFor("name")}
          />
          <div className="error">
            {simpleValidator.current.message("name", inputs.name, "required")}
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={onchangeInput}
            name="email"
            value={inputs.email}
            placeholder="Email Address"
            onBlur={() => simpleValidator.current.showMessageFor("email")}
          />
          <div className="error">
            {simpleValidator.current.message("email", inputs.email, "required")}
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={onchangeInput}
            name="phone"
            value={inputs.phone}
            placeholder="Phone Number"
            onBlur={() => simpleValidator.current.showMessageFor("phone")}
          />
          <div className="error">
            {simpleValidator.current.message("phone", inputs.phone, "required")}
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
