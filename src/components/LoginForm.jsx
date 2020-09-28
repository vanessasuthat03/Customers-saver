import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import UserKit from "../data/UserKit"
import styled from "styled-components"

const LoginContentStyle = styled.div`
  background-color: black;
  font-family: "Peddana", serif;
  font-size: 35px;
  height: 100vh;
  color: #838383;

  p {
    margin: 0;
    padding: 30px;
  }
`

const LoginInput = styled.div`
  width: 80%;
  margin: auto;

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    font-size: 25px;
    padding: 10px;
    margin: 10px;
    border: none;
    border-bottom: 1px solid #222831;
    background-color: black;
    font-family: "Peddana", serif;
    color: white;
  }
  p {
    margin: 0;
    color: red;
    font-size: 25px;
    padding: 0;
  }

  button {
    font-size: 25px;
    margin-top: 40px;
    background: #e11d74;
    border: none;
    color: white;
    border-radius: 7px;
    font-family: "Peddana", serif;
  }
`

const WrongToken = styled.div`
  color: red;
  font-size: 25px;
  padding-bottom: 0;
  width: 80%;
  text-align: center;
`

export default function LoginForm() {
  const [haveError, setHaveError] = useState(false)
  const userKit = new UserKit()
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data, e) => {
    handleLogin(data)
    e.target.reset()
  }
  const message = "Wrong email or password."

  function handleLogin(data) {
    userKit
      .login(data)
      .then(res => res.json())
      .then(data => {
        const token = data.token
        userKit.setToken(token)
        token ? history.push("/home") : setHaveError(true)
      })
  }
  return (
    <LoginContentStyle>
      <p>Your account is now active. Please Login</p>
      {haveError && <WrongToken>{message}</WrongToken>}
      <LoginInput>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="email"
            placeholder="Email"
            ref={register({
              required: true,
              pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i }
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p>Wrong email address.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p>Invalid email address.</p>
          )}

          <input
            name="password"
            placeholder="Password"
            ref={register({ required: true })}
          />
          {errors.password && errors.password.type === "required" && (
            <p>This is required.</p>
          )}
          <button type="submit">Login</button>
        </form>
      </LoginInput>
    </LoginContentStyle>
  )
}
