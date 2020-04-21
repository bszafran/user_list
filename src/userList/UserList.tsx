import React from "react"
import styled from "styled-components/macro"
import Input from "../components/Input"
import useUsersState from "./useUsersState"
import UserEntry from "./UserEntry"

const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ListContainer = styled.div`
  min-width: 350px;

  display: flex;
  flex-direction: column;

  margin-top: 30px;
  margin-left: 5px;
`

const InputContainer = styled.div`
  margin-top: 10px;

  input {
    width: 250px;
  }
`

const Header = styled.h1`
  margin-left: 50px;
`

const UserList = () => {
  const { users, search, setSearch, error } = useUsersState()

  return (
    <UserListContainer>
      <Header>Users list</Header>
      <InputContainer>
        <Input
          value={search}
          onChange={setSearch}
          placeholder="Search by user name..."
        />
      </InputContainer>
      <ListContainer>
        {error ? (
          <div>We are sorry, data cannot be loaded.</div>
        ) : (
          users.map((user, index) => (
            <UserEntry key={user.id} orderNumber={index + 1} user={user} />
          ))
        )}
      </ListContainer>
    </UserListContainer>
  )
}

export default UserList
