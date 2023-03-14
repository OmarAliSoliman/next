import Link from 'next/link'
import React from 'react'

function BtnBack({backLink}) {
  return (
    <>
      <div id="menu">
        <a href={`/#${backLink}`}>
          <div className="hamburger">

            <img src="/images/newarrow.svg" alt="" />

          </div>
          <div className="menu-inner">
          </div>
          <svg version="1.1" id="blob" xmlns="http://www.w3.org/2000/svg" >
            <path id="blob-path" d="M60,500H0V0h60c0,0,20,172,20,250S60,900,60,500z" />
          </svg>
        </a>
      </div>
    </>
  )
}

export default BtnBack