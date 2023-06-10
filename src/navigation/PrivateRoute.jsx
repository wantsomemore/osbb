import { Navigate } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'
import { URLS } from '../constants/urls'

const PrivateRoute = ({ component: RouteComponent }) => {
  const { isAuthenticated } = useSelector((state) => state.authReducer)

  return isAuthenticated ? <RouteComponent /> : <Navigate to={URLS.LOGIN} />
}

export default PrivateRoute
