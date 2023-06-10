import { Routes, Route, BrowserRouter } from 'react-router-dom'

import React from 'react'
import AuthorizedRoute from './AuthRoute'
import PrivateRoute from './PrivateRoute'
import Login from '../pages/Login/Login'
import Dashboard from '../pages/Dashboard/Dashboard'
import { URLS } from '../constants/urls'

export default function Navigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={URLS.LOGIN} element={<AuthorizedRoute component={Login} />} />
        <Route path={URLS.DASHBOARD} element={<PrivateRoute component={Dashboard} />} />
      </Routes>
    </BrowserRouter>
  )
}
