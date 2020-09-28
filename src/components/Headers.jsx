import React from "react"
import styled from "styled-components"
import headerimage from "..//images/headerimage.png"

const BackgroundImg = styled.div`
  justify-content: center;
  display: flex;
`
const Img = styled.img`
  width: 100%;
  height: 435px;
  object-fit: cover;
`
const HeaderText = styled.div`
  width: 50%;
  height: 250px;
  color: #222831;
  position: absolute;
  text-align: center;
  left: 10px;
  transform: rotate(-20deg);
  font-family: "Dancing Script", cursive;
  opacity: 0.85;
  border-radius: 50%;

  p {
    font-size: 20px;
    padding-top: 20px 0px;
  }
`

export default function Headers() {
  return (
    <>
      <BackgroundImg>
        <Img src={headerimage} alt="header" />
        <HeaderText>
          <p>Vanessa Suthat </p>
          <p>JavaScript 3 med Hassan Milan</p>
        </HeaderText>
      </BackgroundImg>
    </>
  )
}
