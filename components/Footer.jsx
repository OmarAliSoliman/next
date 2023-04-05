import React from 'react'
import SubscribeForm from './SubscribeForm'

function Footer() {
  return (
    <>
      {/* <!-- foooter --> */}
      <footer className="footer">
        <div className="container">
          <div className="footer_wrapper">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="logo">
                  <img src="/images/newlogo.svg" alt="" />

                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 ms-auto">
                <div className="footer_social">
                  <div className="social">
                    <ul className="list-unstyled d-flex">
                      <li><a href="https://www.youtube.com/@violacommunications7188" target="_blank"><i className="fab fa-youtube"></i></a></li>
                      <li><a href="https://www.facebook.com/ViolaCommunications/" target="_blank"><i className="fab fa-facebook"></i></a></li>
                      <li><a href="https://www.linkedin.com/company/viola-communications/mycompany/verification/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="https://twitter.com/violacomm?lang=en" target="_blank"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="https://www.instagram.com/violacommunications/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
                <SubscribeForm />
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copy_right">
        <div className="container">
          <h5 className="text-w-300">@ 2023 Viola Outdoor all rights reserved</h5>
        </div>
      </div>
    </>
  )
}

export default Footer