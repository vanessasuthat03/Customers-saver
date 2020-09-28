import React, { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import headerimage from "../images/headerimage.png"
import styled from "styled-components"
import UserKit from "../data/UserKit"
import { UserContext, CustomerContext } from "../contexts/CustomerContext"

const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const HeaderLayoutStyle = styled.div`
  background-color: #eeeeee;
  font-family: "Peddana", serif;
`

const HomeStyle = styled.div`
  color: #222831;
  font-size: 55px;

  position: absolute;
  top: 50px;
  left: 25%;

  a {
    text-decoration: none;
  }
`
const DetailStyle = styled(HomeStyle)`
  left: 80%;
`
const NameStyle = styled.div`
  font-size: 30px;
  padding: 0 10% 0 10%;
  color: #eeeeee;
  border-bottom: 5px solid #fab95b;
  background-color: black;

  span {
    color: #e11d74;
    margin-left: 10px;
  }
  p {
    font-size: 23px;
    margin: 0;
  }
  p:hover {
    background-color: black;
    color: #e11d74;
  }
`

export default function LayoutSimple() {
  const { user, setUser } = useContext(UserContext)
  const userKit = new UserKit()

  useEffect(() => {
    userKit
      .getMe()
      .then(res => res.json())
      .then(data => {
        setUser(data)
      })
  }, [])
  return (
    <HeaderLayoutStyle>
      <Img src={headerimage} alt="header" />
      <div>
        <HomeStyle>
          <Link to="/home">Home </Link>
        </HomeStyle>
      </div>

      <NameStyle>
        Welcome:
        <span>
          {user.firstName} {user.lastName}
        </span>
        <p> {user.email}</p>
      </NameStyle>
    </HeaderLayoutStyle>
  )
}
