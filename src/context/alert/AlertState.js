import React, {createContext, useContext, useReducer} from "react";
import {alertReducer} from "./alertReducer";
import {HIDE_ALERT, SHOW_ALERT} from "../types";

const AlertContext = createContext('It is default CONTEXT for ALERT')
AlertContext.displayName = 'ALERT'

export const useAlert = () => useContext(AlertContext)

export const AlertState = ({children}) => {
  const [state, dispatch] = useReducer(alertReducer, null)
  const hide = () => dispatch({type: HIDE_ALERT})
  const show = (text, type = 'secondary') => {
    dispatch({
      type: SHOW_ALERT,
      payload: {type, text}
    })
  }

  return (
    <AlertContext.Provider value={{hide, show, alertState: state}}>
      {children}
    </AlertContext.Provider>
  )
}