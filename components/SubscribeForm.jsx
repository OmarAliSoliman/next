import React, { useState, useRef } from 'react'
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import axios from "axios";
import { newsletter_api } from './API';
import SpinnerLoading from './SpinnerLoading';

function SubscribeForm() {
  const simpleValidator = useRef(new SimpleReactValidator());
  const [loading, setLoding] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [, forceUpdate] = useState();
  const [email, setEmail] = useState(" ");



  const onchangeInput = (e) => {
    setEmail(e.target.value);
    
  };


  const blurMessages = () => {
    simpleValidator.current.showMessageFor("email")
    setSubmitSuccess(false);
  }

  const sendForm = (e) => {
    setLoding(true)
    e.preventDefault();

    if (email === "") {
      setEmail("");
      setLoding(false);
      return;
    }

    if (simpleValidator.current.allValid()) {

      axios.post(`${newsletter_api}`, { data: { "email": email } }).then((res) => {
        if (res.status === 200) {
          console.log(res)
          toast.success(`message was send successfully`, { position: toast.POSITION.TOP_CENTER })
          setLoding(false)
          simpleValidator.current.hideMessages();
          setEmail("");
          setSubmitSuccess(true);
        }
      }).catch((er) => {
        console.log(er.response)
      }).finally(() => {
        setLoding(false)
        simpleValidator.current.hideMessages();
        setEmail("")
        setSubmitSuccess(true);
      })
    } else {
      simpleValidator.current.showMessages();
      forceUpdate(1);
      toast.error(`please check your information`, { position: toast.POSITION.TOP_CENTER })
      setLoding(false)
      setSubmitSuccess(false);
      // toast.error(`برجاء التاكد من البيانات`);
      // simpleValidator.current.autoForceUpdate();
      // setLoading(false);
    }
  };

  return (
    <>
      <div className="footer_form">
        <h5 className="text-w-300 text-f-3 text-white">Join our newsletter</h5>
        <form action="" onSubmit={sendForm}>
          <div className="input-group">
            <input type="email" value={email} name="email" onChange={onchangeInput} onBlur={blurMessages} className="form-control" placeholder="Enter your Email" />
            {loading ? (<SpinnerLoading />) : (
              <button className="input-group-text" type="submit" id="basic-addon2">Subscribe</button>
            )}

          </div>
          {!submitSuccess ? (
            <div className="error">
              {simpleValidator.current.message("email", email, "required")}
            </div>
          ): null}
        </form>
      </div>
    </>
  )
}

export default SubscribeForm