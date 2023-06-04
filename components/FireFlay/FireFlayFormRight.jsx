import React, { useRef, useState } from 'react'
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import axios from "axios";
import SpinnerLoading from '../SpinnerLoading'
import { fireflycontactapi } from '../API';
import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input'



function FireFlayFormRight() {
  const simpleValidator = useRef(new SimpleReactValidator());
  const [loading, setLoading] = useState(false);
  const [, forceUpdate] = useState();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [phoneError, setphoneError] = useState(false);
  const [inputs, setInputs] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    Company: "",
    Message: "",
  });


  const onchangeInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };


  const blurMessages = (type) => {
    simpleValidator.current.showMessageFor(type)
    // setSubmitSuccess(false);
  }

  const resetForm = () => {
    setInputs({
      FirstName: "",
      LastName: "",
      Email: "",
      PhoneNumber: "",
      Company: "",
      Message: "",
    });
    setphoneError(false)
  };

  const phoneChange = (val) => {
    setInputs({ ...inputs, PhoneNumber: val });
    setphoneError(false)
  }


  const sendForm = (e) => {
    setLoading(true);
    e.preventDefault();

    if (!inputs.PhoneNumber || !isValidPhoneNumber(inputs.PhoneNumber)) {
      setphoneError(true); // Set phone error if phone number is empty or invalid
      setLoading(false);
    }

    if (simpleValidator.current.allValid()) {
      if (!inputs.PhoneNumber || !isValidPhoneNumber(inputs.PhoneNumber)) {
        setphoneError(true); // Set phone error if phone number is empty or invalid
        setLoading(false);
        return;
      }

      axios
        .post(`${fireflycontactapi}`, { data: inputs })
        .then((res) => {
          if (res.status === 200) {
            toast.success(`Message was sent successfully`, {
              position: toast.POSITION.TOP_CENTER,
            });
            setLoading(false);
            resetForm();
            document.querySelectorAll('#fireflayform .error').forEach((el) => {
              el.style.display = 'none';
            });
          }
        });
    } else {
      simpleValidator.current.showMessages();
      forceUpdate(1);
      toast.error(`Please Check Your Information`, {
        position: toast.POSITION.TOP_CENTER,
      });
      setLoading(false);
      document.querySelectorAll('#fireflayform .error').forEach((el) => {
        el.style.display = 'block';
      });
    }
  };

  return (
    <>

      <div className="side_right_section">

        {loading ? (<div className="form_loading"></div>) : null}

        <h5 className="text-center form_title">Let’s get <span>started!</span></h5>
        <p className="text-center form_text">
          Please contact us and we will get back to you as soon as possible. We are excited to work with you.
        </p>
        <form id="fireflayform" action="" onSubmit={sendForm}>
          <div className="form-group">
            <input type="text" name="FirstName" onChange={onchangeInput} onBlur={() => blurMessages("Name")} value={inputs.FirstName} id="" placeholder="First name*" className="form-control" />
            {simpleValidator.current.message ? (
              <div className="error">
                {simpleValidator.current.message("FirstName", inputs.FirstName, "required")}
              </div>
            ) : null}
          </div>
          <div className="form-group">
            <input type="text" name="LastName" onChange={onchangeInput} onBlur={() => blurMessages("Name")} id="" value={inputs.LastName} placeholder="Last name*" className="form-control" />
            {simpleValidator.current.message ? (
              <div className="error">
                {simpleValidator.current.message("LastName", inputs.LastName, "required")}
              </div>
            ) : null}
          </div>
          <div className="form-group">
            <input type="email" name="Email" onChange={onchangeInput} onBlur={() => blurMessages("Name")} id="" value={inputs.Email} placeholder="Email address*" className="form-control" />
            {simpleValidator.current.message ? (
              <div className="error">
                {simpleValidator.current.message("Email", inputs.Email, "required")}
              </div>
            ) : null}
          </div>
          <div className="form-group">

            <PhoneInput
              international
              countryCallingCodeEditable={false}
              placeholder="Enter phone number *"
              defaultCountry="AE"
              value={inputs.PhoneNumber}
              name="PhoneNumber"
              className='form-control'
              onChange={phoneChange}
              error={inputs.PhoneNumber ? (isValidPhoneNumber(inputs.PhoneNumber) ? undefined : 'Invalid phone number') : 'Phone number required'}
            />
            {inputs.PhoneNumber && !isValidPhoneNumber(inputs.PhoneNumber) && (
              <div className="error">Invalid phone number</div>
            )}

            {phoneError ?  <div className="error">phone number is required</div>:null}
          </div>
          <div className="form-group">
            <input type="text" name="Company" onChange={onchangeInput} onBlur={() => blurMessages("Name")} id="" value={inputs.Company} placeholder="Company" className="form-control" />
          </div>
          <div className="form-group">
            <textarea name="Message" onChange={onchangeInput} onBlur={() => blurMessages("Name")} className="form-control" value={inputs.Message} placeholder="Message"></textarea>
          </div>
          <div className="btn_submit">
            {loading ? (
              <SpinnerLoading />
            ) : (
              <button type="submit" className="btn btn-dark d-block w-100 text-center text-uppercase">Submit</button>
            )}
          </div>
        </form>
        <div className="contact_info text-center">
          <ul className="list-unstyled">
            <li><a href="mailto:marketing@Viola.ae">marketing@Viola.ae</a></li>
            <li><a href="tel:02 644 0000">02 644 0000</a></li>
          </ul>
          {/* <div className="site_name">
            <a href="www.voutdoor.ae">www.voutdoor.ae</a>
          </div> */}
        </div>
      </div>

    </>
  )
}

export default FireFlayFormRight