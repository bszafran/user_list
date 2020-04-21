import { shallow } from "enzyme"
import React from "react"
import { mockedUsers } from "../mocks"
import UserList from "../UserList"
import useUsersState from "../useUsersState"

jest.mock("../useUsersState")
const mockedUseUsersState = useUsersState as jest.Mock

describe("UserList component", () => {
  const mockedUseUsersStateValue = {
    users: mockedUsers,
    search: "",
    setSearch: () => {},
    error: false,
  }

  it("displays data when available", async () => {
    mockedUseUsersState.mockReturnValue(mockedUseUsersStateValue)
    const wrapper = shallow(<UserList />)

    expect(wrapper).toMatchSnapshot()
  })

  it("renders empty list container when no data are available", () => {
    mockedUseUsersState.mockReturnValue({
      ...mockedUseUsersStateValue,
      users: [],
    })
    const wrapper = shallow(<UserList />)

    expect(wrapper).toMatchSnapshot()
  })

  it("displays error message when error occurred", () => {
    mockedUseUsersState.mockReturnValue({
      ...mockedUseUsersStateValue,
      error: true,
    })
    const wrapper = shallow(<UserList />)

    expect(wrapper).toMatchSnapshot()
  })
})
