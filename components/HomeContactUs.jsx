import React from 'react'
import { bublic_url } from './API'
import ContactForm from './ContactForm'

function HomeContactUs({data}) {
  return (
    <>
      {/* <!-- contact us --> */}
      <div className="contact_us" id="contactus_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="card_img">
                <div className="img_parent">
                  <img src={`${bublic_url}${data.attributes?.contactus_image?.data?.attributes.url}`} alt="" />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="contact_us_form">
                <div className="form_wrapper">
                  <h5 className="text-f-9 text-w-700 text-uppercase text-center text-black ">contact us</h5>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeContactUs