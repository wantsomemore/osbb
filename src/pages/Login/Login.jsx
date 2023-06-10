import React from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import './Login.styles.css'
import { HomeOutlined } from '@ant-design/icons'
import Icon from '../../components/Icon/Icon'
import { register } from '../../api/authThunks'
import { useDispatch, useSelector } from 'react-redux'
const Login = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  console.log('state', state, 'storage', localStorage.getItem('user'))
  return (
    <div className="container">
      <div className="welcomeContainer">
        <Icon Component={HomeOutlined} />
        <h1>Welcome to the [Company]</h1>
      </div>
      <form className="loginForm">
        <Input placeholder="Email" value="" />
        <Input placeholder="Password" value="" />
        <Button
          onClick={() =>
            dispatch(
              register({
                username: 'JohnDoe',
                email: 'sviiatoslav.mardynavka.ki.2019@lpnu.ua',
                password: 'Password1!'
              })
            )
          }>
          Login
        </Button>
      </form>
    </div>
  )
}

export default Login
