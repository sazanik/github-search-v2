import React, {createContext, useContext, useReducer} from "react";
import {githubReducer} from "./githubReducer";
import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from "../types";

const GithubContext = createContext('It is default CONTEXT for GITHUB')
export const useGithub = () => useContext(GithubContext)

export const GithubState = ({children}) => {

  const initState = {
    user: {},
    users: [],
    loading: false,
    repos: []
  }

  const init = initState => {
    return initState
  }

  const [state, dispatch] = useReducer(githubReducer, initState, init)

  const search = async value => {
    setLoading()
    dispatch({type: SEARCH_USERS, payload: []})
  }

  const getUser = async name => {
    setLoading()
    dispatch({type: GET_USER, payload: {}})
  }

  const getRepos = async name => {
    setLoading()
    dispatch({type: GET_REPOS, payload: {}})
  }

  const clearUsers = () => dispatch({type: CLEAR_USERS})
  const setLoading = () => dispatch({type: SET_LOADING})

  const {user, users, repos, loading} = state
  return (
    <GithubContext.Provider value={{
      search,
      getUser,
      getRepos,
      clearUsers,
      setLoading,
      user, users, repos, loading
    }}>
      {children}
    </GithubContext.Provider>
  )
}