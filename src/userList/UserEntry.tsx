import React from "react"
import { User as UserModel } from "./model"
import styled from "styled-components/macro"

interface UserEntryProps {
  user: UserModel
  orderNumber: number
}

const UserEntryContainer = styled.div`
  margin-top: 10px;
`

const Faded = styled.span`
  color: #b8b8b8;
`

const NameContainer = styled.span`
  margin: 0 10px;
`

const UserNameContainer = styled(Faded)`
  font-size: 13px;
`

const UserEntry = (props: UserEntryProps) => {
  const { orderNumber } = props
  const { name, username } = props.user

  return (
    <UserEntryContainer>
      <Faded>{orderNumber}.</Faded>
      <NameContainer>{name}</NameContainer>
      <UserNameContainer>{`@${username}`}</UserNameContainer>
    </UserEntryContainer>
  )
}

export default UserEntry
