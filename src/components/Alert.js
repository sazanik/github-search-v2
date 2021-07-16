import React from "react";
import {useAlert} from "../context/alert/AlertState";

export const Alert = () => {
  const {alertState, hide} = useAlert()

  if (!alertState) return null

  return (
    <div className={`alert alert-${alertState?.type || 'secondary'} d-flex alert-dismissible rounded-0 p-3 mb-0`}
         role="alert">
      {alertState?.text}
      <button
        onClick={hide}
        className="close d-block ms-auto"
        type="button"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )

}