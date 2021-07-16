import React from "react";
import {Link} from "react-router-dom";

export const Card = ({user}) => {
  console.log(user)
  return (
    <div className="card">
      <img src={user.avatar_url} alt={user.login} className='card-img-top'/>
      <div className="card-body">
        <h5 className="title">{user.login}</h5>
          <Link
            to={'/profile/' + user.login}
            className='btn btn-link p-0 rounded-0'
          >Open
          </Link>
      </div>
    </div>
  )
}