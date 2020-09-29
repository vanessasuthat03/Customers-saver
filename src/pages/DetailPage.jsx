import React, { useState, useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import UserKit from "../data/UserKit"
import CustomerForm from "../components/CustomerForm"
import LayoutSimple from "../components/LayoutSimple"
import { UserContext } from "../contexts/CustomerContext.js"
import styled from "styled-components"

const DetailContainer = styled.div`
  background-color: #e11d74;
  display: block;
  flex-direction: column;
`

const DetailList = styled.div`
  color: black;
  font-size: 30px;
  margin: 0 auto;
  width: 500px;
  text-align: center;
  padding: 40px;
  font-family: "Peddana", serif;

  p {
    margin: 0;
  }
  span {
    color: #fab95b;
  }
`

const ButtonContainer = styled.div`
  background-color: #e11d74;
  font-family: "Peddana", serif;

  p {
    margin: 0 0 0 65px;
    padding-top: 30px;
    font-size: 45px;
  }
`
const DetailButton = styled.div`
  font-size: 35px;
  font-family: "Peddana", serif;
  padding-left: 68px;
`
const EditButton = styled.a`
  color: black;
  background-color: #fab95b;
  font-family: "Peddana", serif;
  font-size: 23px;
  border: none;
  border-radius: 10px;
  padding: 0 25px 0 25px;
  text-decoration: none;
`
const DeleteButton = styled(EditButton)`
  margin-left: 40px;
`
export default function DetailPage(props) {
  const id = props.match.params.id
  const [detailId, setDetailId] = useState({})
  const [editInput, setEditInput] = useState(false)
  const { user } = useContext(UserContext)
  const userKit = new UserKit()
  const history = useHistory()

  useEffect(() => {
    handleGetDetail()
  }, [])

  const name = detailId.name
  const organisationNr = detailId.organisationNr
  const vatNr = detailId.vatNr
  const reference = detailId.reference
  const paymentTerm = detailId.paymentTerm
  const website = detailId.website
  const email = detailId.email
  const phoneNumber = detailId.phoneNumber

  const preloadedValues = {
    name: name,
    organisationNr: organisationNr,
    vatNr: vatNr,
    reference: reference,
    paymentTerm: paymentTerm,
    website: website,
    email: email,
    phoneNumber: phoneNumber,
  }

  function showEditInput() {
    setEditInput(true)
  }

  function handleEditCustomer(data) {
    userKit
      .editCustomerDetail({ id, data })
      .then((res) => res.json())
      .then((data) => {
        handleGetDetail()
        setEditInput(false)
      })
  }

  function handleGetDetail() {
    userKit
      .getDetail(id)
      .then((res) => res.json())
      .then((data) => {
        setDetailId(data)
      })
  }

  function handleDeleteCustomer(data) {
    userKit
      .deleteCustomer({ id, data })

      .then((data) => {
        setDetailId(data)
        history.push("/home")
      })
  }
  console.log("hajjjkk")
  return (
    <div>
      <LayoutSimple user={user} />

      <ButtonContainer>
        <p>Customer Detail test</p>
        <DetailButton>
          <EditButton herf="#edit" onClick={showEditInput}>
            Edit
          </EditButton>
          <DeleteButton onClick={handleDeleteCustomer}>Delete</DeleteButton>
        </DetailButton>
      </ButtonContainer>
      {detailId && (
        <DetailContainer>
          <DetailList>
            <p>
              Customer: <span>{detailId.name}</span>
            </p>
            <p>
              Organisation Number: <span>{organisationNr}</span>
            </p>
            <p>
              VatNr: <span>{vatNr}</span>
            </p>
            <p>
              Reference: <span>{reference}</span>
            </p>
            <p>
              Payment: Term <span>{paymentTerm}</span>
            </p>
            <p>
              Website: <span>{website}</span>
            </p>
            <p>
              Email: <span>{email}</span>
            </p>
            <p>
              Phone: <span>{phoneNumber}</span>
            </p>
          </DetailList>
        </DetailContainer>
      )}
      <div>
        <div id="edit">
          {editInput && (
            <CustomerForm
              handleEditCustomer={handleEditCustomer}
              preloadedValues={preloadedValues}
            />
          )}
        </div>
      </div>
    </div>
  )
}
