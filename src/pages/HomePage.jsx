import React, { useContext } from "react"
import { CustomerContext } from "../contexts/CustomerContext.js"
import CreateCustomer from "../components/CreateCustomer"
import CustomerList from "../components/CustomerList"
import UserKit from "../data/UserKit.js"

export default function HomePage() {
  const userKit = new UserKit()
  const { customerList, setCustomerList } = useContext(CustomerContext)

  function createCustomerList() {
    userKit
      .getCustomerList()
      .then(res => res.json())
      .then(data => {
        setCustomerList(data.results)
      })

      .catch(error => {
        console.log("error", error)
      })
  }
  return (
    <div value={{ customerList, setCustomerList }}>
      <CustomerList createCustomerList={createCustomerList} />
      <CreateCustomer createCustomerList={createCustomerList} />
    </div>
  )
}
