import React from "react"
import { useForm } from "react-hook-form"
import UserKit from "../data/UserKit"
import styled from "styled-components"
import Headers from "../components/Headers"

const FormStyle = styled.div`
  text-align: center;
  // color: #838383;
  color: #eeeeee;
  background-color: black;

  h2 {
    font-size: 35px;
    font-family: "Peddana", serif;
    text-decoration: underline;
    text-decoration-color: #fab95b;
    margin: 0;
  }
  p {
    font-size: 17px;
  }
  button {
    width: 100px;
    padding: 0 75px;
    margin: auto;
    border-radius: 7px;
    background: #e11d74;
    color: white;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 25px;
    font-family: "Peddana", serif;
  }
`
const InputStyle = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  // margin-bottom: 80px;

  input {
    font-size: 13px;
    padding: 8px;
    margin: 13px;
    // border-radius: 7px;
    border: none;
    border-bottom: 1px solid #838383;
    margin-bottom: 40px;
    background-color: black;
    color: white;
  }
`

export default function RegisterForm() {
  const { register, handleSubmit, errors } = useForm()

  const userKit = new UserKit()

  const onSubmit = (data, e) => {
    console.log("data from register form", data)
    handleRegister(data)
    e.target.reset()
  }

  function handleRegister(data) {
    userKit.register(data)
    console.log("data i register form", data)
  }

  return (
    <div>
      <Headers />
      <FormStyle>
        <h2>Register</h2>
        <p>Enter details to register</p>
        <InputStyle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              ref={register({ required: true, minLength: 1, maxLength: 30 })}
            />
            {errors.firstName && errors.firstName.type === "required" && (
              <p>This is required.</p>
            )}
            {errors.firstName && errors.firstName.type === "minLength" && (
              <p>Customer name required min 1 characters. </p>
            )}
            {errors.firstName && errors.firstName.type === "maxLength" && (
              <p>Customer name required max 30 characters. </p>
            )}
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              ref={register({ required: true, minLength: 1, maxLength: 30 })}
            />
            {errors.lastName && errors.lastName.type === "required" && (
              <p>This is required.</p>
            )}
            {errors.lastName && errors.lastName.type === "minLength" && (
              <p>Customer name required min 1 characters. </p>
            )}
            {errors.lastName && errors.lastName.type === "minLength" && (
              <p>Customer name required max 30 characters. </p>
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              ref={register({
                required: true,
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i }
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <p>This is required.</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p>Invalid email address.</p>
            )}
            <input
              type="password"
              name="password"
              placeholder="Password"
              ref={register({
                required: true
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <p>This is required.</p>
            )}

            <input
              type="text"
              name="organisationName"
              placeholder="Organisation Name"
              ref={register({
                required: true,
                minLength: 3
              })}
            />
            {errors.organisationName &&
              errors.organisationName.type === "required" && (
                <p>This is required.</p>
              )}

            {errors.organisationName &&
              errors.organisationName.type === "minLength" && (
                <p>Customer name required minimum 3 characters. </p>
              )}
            <input
              type="number"
              name="organisationKind"
              placeholder="Organisation Kind (0,1,2)"
              ref={register({
                required: true,
                maxLength: 1
              })}
            />
            {errors.organisationKind &&
              errors.organisationKind.type === "required" && (
                <p>You can type in 0, 1 or 2 in this field. </p>
              )}
            <button type="submit">Register</button>
          </form>
        </InputStyle>
      </FormStyle>
    </div>
  )
}
