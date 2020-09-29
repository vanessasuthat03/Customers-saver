import React from "react"
import { useForm } from "react-hook-form"
import UserKit from "../data/UserKit"
import styled from "styled-components"
import Headers from "../components/Headers"

const FormStyle = styled.div`
  text-align: center;
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
`
const InputStyle = styled.div`
  width: 95%;
  margin: auto;
  background-color: black;

  input {
    font-size: 16px;
    padding: 8px;
    border: none;
    border-bottom: 1px solid #838383;
    margin: 40px 13px 0;
    background-color: black;
    color: white;
  }
  p {
    color: #e11d74;
  }
`
const CreatFormStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin 0 auto;
  
`
const ButtonStyle = styled.button`
  padding: 0 35px;
  margin: 30px auto 50px;
  border-radius: 7px;
  background: #e11d74;
  color: white;
  border: none;
  font-size: 25px;
  font-family: "Peddana", serif;
`

export default function RegisterForm() {
  const { register, handleSubmit, errors } = useForm()
  const userKit = new UserKit()
  const onSubmit = (data, e) => {
    handleRegister(data)
    e.target.reset()
  }

  function handleRegister(data) {
    userKit.register(data)
  }

  return (
    <div>
      <Headers />
      <FormStyle>
        <h2>Register</h2>
        <p>Enter details to register</p>
        <InputStyle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CreatFormStyle>
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
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  },
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
                  required: true,
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
                  minLength: 3,
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
                  maxLength: 1,
                })}
              />
              {errors.organisationKind &&
                errors.organisationKind.type === "required" && (
                  <p>You can type in 0, 1 or 2 in this field. </p>
                )}
            </CreatFormStyle>
            <ButtonStyle type="submit">Register</ButtonStyle>
          </form>
        </InputStyle>
      </FormStyle>
    </div>
  )
}
