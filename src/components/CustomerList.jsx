import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { CustomerContext } from "../contexts/CustomerContext.js"
import styled from "styled-components"
import LayoutSimple from "../components/LayoutSimple"

const HomePageStyle = styled.div`
  background-color: #eeeeee;
  font-family: "Peddana", serif;
`

const CustomerName = styled.p`
  color: black;
  font-size: 30px;
  margin: 0 auto;
  width: 500px;
  text-align: center;
`

const CustomerNameList = styled.div`
  background-color: #e11d74;

  a {
    text-decoration: none;
  }
  &: hover ${CustomerName} {
    background-color: black;
    color: #e11d74;
    border-radius: 10px;
  }
`
const Nocustomer = styled.p`
  color: #e11d74;
  background-color: black;
  font-size: 30px;
  text-align: center;
  margin: 0;
  padding: 30px;
`

export default function CustomerList({ createCustomerList }) {
  const { customerList } = useContext(CustomerContext)

  useEffect(() => {
    createCustomerList()
  }, [])
  console.log("customerList", customerList)

  return (
    <HomePageStyle>
      <LayoutSimple />

      {customerList.length ? (
        customerList.map(customerItem => {
          const id = customerItem.id
          return (
            <CustomerNameList key={id}>
              <Link to={`/customer/${id}`} key={id}>
                <CustomerName>{customerItem.name}</CustomerName>
              </Link>
            </CustomerNameList>
          )
        })
      ) : (
        <Nocustomer>
          You don´t have any customer yet...please create new here below
        </Nocustomer>
      )}
    </HomePageStyle>
  )
}
