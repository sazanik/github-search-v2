import React, {createContext, useContext, useReducer} from "react";
import {githubReducer} from "./githubReducer";
import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from "../types";
import axios from "axios";

const GithubContext = createContext('It is default CONTEXT for GITHUB')
GithubContext.displayName = 'GITHUB'
export const useGithub = () => useContext(GithubContext)

const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID

const withCreds = url => {
  return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

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

    const res = await axios.get(withCreds(`https://api.github.com/search/users?q=${value}&`))

    dispatch({type: SEARCH_USERS, payload: res.data.items})
  }

  const getUser = async value => {
    setLoading()

    const res = await axios.get(withCreds(`https://api.github.com/users/${value}?`))

    dispatch({type: GET_USER, payload: res.data})
  }

  const getRepos = async value => {
    setLoading()

    const res = await axios.get(withCreds(`https://api.github.com/users/${value}/repos?per_page=100&`))

    dispatch({type: GET_REPOS, payload: res.data})
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