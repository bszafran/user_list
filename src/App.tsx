import React from "react"
import styled from "styled-components/macro"
import UserList from "./userList/UserList"

const AppContainer = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
`

function App() {
  return (
    <AppContainer>
      <UserList />
    </AppContainer>
  )
}

export default App
