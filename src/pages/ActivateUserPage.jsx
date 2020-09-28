import React from "react"
import { useHistory } from "react-router-dom"
import UserKit from "../data/UserKit"
import Headers from "../components/Headers"
import styled from "styled-components"

const Activate = styled.div`
  color: #e11d74;
  font-family: "Peddana", serif;
  background-color: black;
  text-align: center;
  height: 100vh;

  p {
    font-size: 30px;
    margin: 0;
    padding: 20px 0 0 0;
  }

  button {
    background: #e11d74;
    border: none;
    border-radius: 7px;
    font-size: 25px;
    color: white;
    font-family: "Peddana", serif;
    margin-bottom: 30px;
    padding: 0 35px;
  }
`

export default function ActivateUserPage({ token, setToken, uid, setUid }) {
  const history = useHistory()
  const userKit = new UserKit()

  function handleActivateUser() {
    userKit.activateUser(uid, token).then(() => {
      setUid(null)
      setToken(null)
      history.push("/login")
    })
  }
  return (
    <div>
      <Headers />
      <Activate>
        <p>Activate Account</p>
        <button onClick={handleActivateUser}>Activate User</button>
      </Activate>
    </div>
  )
}
