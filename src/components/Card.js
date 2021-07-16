import React from "react";
import {Link} from "react-router-dom";

export const Card = () => {
  return (
    <div className="card">
      <img src="" alt="" className='card-img-top'/>
      <div className="card-body">
        <h5 className="title">Card</h5>
          <Link
            to={'/profile'}
            className='btn btn-link p-0 rounded-0'
          >Open
          </Link>
      </div>
    </div>
  )
}