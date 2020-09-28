import React from "react"
import UserKit from "../data/UserKit.js"
import CustomerForm from "../components/CustomerForm"
import styled from "styled-components"

export const HomeCreate = styled.div`
  background-color: #e11d74;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 15px;
`

const CreateTextStyle = styled.div`
  background-color: black;
  width: 95%;
  color: #e11d74;
  font-size: 20px;
  padding: 15px 0 15px 0;
  margin: 0 auto;
`

export default function CreateCustomer({ createCustomerList }) {
  const userKit = new UserKit()

  function handleCreateCustomer(data) {
    userKit
      .createCustomer(data)
      .then(res => res.json())
      .then(data => {
        createCustomerList()
      })

      .catch(error => {
        console.log("error", error)
      })
  }

  return (
    <HomeCreate>
      <CreateTextStyle>Create new Customer</CreateTextStyle>

      <CustomerForm handleCreateCustomer={handleCreateCustomer} />
    </HomeCreate>
  )
}
