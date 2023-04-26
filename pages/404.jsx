import Link from 'next/link'
import React from 'react'

function ErrorPage() {
  return (
    <div className="errorpage">
      <div className="wrapper">
        <img src={`/images/error.jpg`} alt="" />
        <Link href="/">Back to home</Link>
      </div>
    </div>
  )
}

export default ErrorPage