import {HIDE_ALERT, SHOW_ALERT} from "../types";

const handlers = {
  [SHOW_ALERT]: (state, action) => action.payload,
  [HIDE_ALERT]: () => null,
  DEFAULT: state => state
}

export const alertReducer = (state, action) => {
  console.log('| STATE: ', state, '|', 'ACTION: ', action, '|')
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}

