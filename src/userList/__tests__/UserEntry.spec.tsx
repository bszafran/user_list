import React from "react"
import UserEntry from "../UserEntry"
import { shallow } from "enzyme"
import { mockedUsers } from "../mocks"

describe("UserEntry component", () => {
  const mockedProps = {
    orderNumber: 5,
    user: mockedUsers[0],
  }

  it("renders correctly with mocked props", () => {
    const userEntryComponent = shallow(<UserEntry {...mockedProps} />)
    expect(userEntryComponent).toMatchSnapshot()
  })
})
