import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function SpinnerLoading() {
  return (
    <>
      <button disabled className="btn">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </button>
    </>
  )
}

export default SpinnerLoading