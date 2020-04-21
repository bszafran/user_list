import React from "react"
import { mount } from "enzyme"
import Input from "../Input"

describe("Input component", () => {
  const mockedInputProps = {
    value: "hello",
    onChange: () => {},
    placeholder: "Search me",
  }

  it("renders correctly with mocked props", () => {
    const inputComponent = mount(<Input {...mockedInputProps} />)
    expect(inputComponent).toMatchSnapshot()
  })

  it("fires onChange method onClick", () => {
    const onChangeSpy = jest.fn((value) => {})
    const valueToFill = "testValue"
    const inputComponent = mount(
      <Input {...mockedInputProps} onChange={onChangeSpy} />
    )

    inputComponent.find("input").simulate("change", {
      target: { value: valueToFill },
    })

    expect(onChangeSpy).toHaveBeenCalledWith(valueToFill)
  })

  it("fires onChange method with empty string when text cleared", () => {
    const onChangeSpy = jest.fn((value) => {})
    const valueToFill = "testValue"
    const inputComponent = mount(
      <Input {...mockedInputProps} onChange={onChangeSpy} />
    )

    inputComponent.find("input").simulate("change", {
      target: { value: valueToFill },
    })
    expect(onChangeSpy).toHaveBeenCalledWith(valueToFill)

    inputComponent.find("input").simulate("change", {
      target: { value: "" },
    })
    expect(onChangeSpy).toHaveBeenCalledWith("")
  })
})
