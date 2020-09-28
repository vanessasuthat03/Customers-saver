import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"

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

export default function CustomerForm({
  handleCreateCustomer,
  handleEditCustomer,
  preloadedValues
}) {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: preloadedValues
  })

  const onSubmit = (data, e) => {
    e.target.reset()

    if (handleCreateCustomer) {
      let seUpperCase = data.vatNr
        .substring(0, 2)
        .toUpperCase()
        .concat(data.vatNr.substring(2))

      data.vatNr = seUpperCase

      handleCreateCustomer(data)
    } else if (handleEditCustomer) {
      handleEditCustomer(data)
    }
  }
  return (
    <InputStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CreatFormStyle>
          <input
            type="text"
            name="name"
            placeholder="Customer Name"
            ref={register({
              required: true,
              minLength: 3,
              maxLength: 50
            })}
          />
          {errors.name && errors.name.type === "required" && (
            <p>
              <span>This is required.</span>
            </p>
          )}

          {errors.name && errors.name.type === "minLength" && (
            <p>Customer name required minimum 3 characters. </p>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <p>Customer name required maximum 50 characters. </p>
          )}

          <input
            type="number"
            name="organisationNr"
            placeholder="Organisation Number"
            ref={register({ required: true, minLength: 10, maxLength: 15 })}
          />
          {errors.organisationNr &&
            errors.organisationNr.type === "required" && (
              <p>This is required.</p>
            )}
          {errors.organisationNr &&
            errors.organisationNr.type === "minLength" && (
              <p>Required minimum 10 numbers.</p>
            )}
          {errors.organisationNr &&
            errors.organisationNr.type === "maxLength" && (
              <p>Required maximum 15 numbers.</p>
            )}

          <input
            type="text"
            name="vatNr"
            placeholder="Vat number"
            ref={register({
              required: true,
              minLength: 12,
              maxLength: 12,
              pattern: { value: /[SE-se]+[0-9]/ }
            })}
          />
          {errors.vatNr && errors.vatNr.type === "required" && (
            <p>This is required.</p>
          )}

          {errors.vatNr && errors.vatNr.type === "pattern" && (
            <p>Required SE and 10 numbers.</p>
          )}
          {errors.vatNr && errors.vatNr.type === "minLength" && (
            <p>Required SE and 10 numbers.</p>
          )}
          {errors.vatNr && errors.vatNr.type === "maxLength" && (
            <p>Required SE and 10 numbers.</p>
          )}

          <input
            type="text"
            name="reference"
            placeholder="Reference"
            ref={register({ required: true })}
          />
          {errors.reference && errors.reference.type === "required" && (
            <p>This is required.</p>
          )}
          <input
            type="number"
            name="paymentTerm"
            placeholder="Payment Term"
            ref={register({ required: true, maxLength: 20 })}
          />
          {errors.paymentTerm && errors.paymentTerm.type === "required" && (
            <p>This is required.</p>
          )}
          {errors.paymentTerm && errors.paymentTerm.type === "maxLength" && (
            <p>Max 20.</p>
          )}
          <input
            type="text"
            name="website"
            placeholder="Website"
            ref={register({
              required: true,
              pattern: { value: /www.+[a-zA-Z0-9.-]+\.[a-z]/ }
            })}
          />
          {errors.website && errors.website.type === "required" && (
            <p>This is required.</p>
          )}
          {errors.website && errors.website.type === "pattern" && (
            <p>Invalid website address.</p>
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
            type="number"
            name="phoneNumber"
            placeholder="Phone Number"
            ref={register({ required: true })}
          />
          {errors.phoneNumber && errors.phoneNumber.type === "required" && (
            <p>This is required.</p>
          )}
        </CreatFormStyle>
        <ButtonStyle type="submit">Submit</ButtonStyle>
      </form>
    </InputStyle>
  )
}
