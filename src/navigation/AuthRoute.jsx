import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { URLS } from '../constants/urls'

const AuthorizedRoute = ({ component: RouteComponent }) => {
  const { isAuthenticated } = useSelector((state) => state.authReducer)
  return isAuthenticated ? <Navigate to={URLS.ROOT} /> : <RouteComponent />
}

export default AuthorizedRoute
