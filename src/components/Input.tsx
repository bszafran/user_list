import React from "react"
import styled from "styled-components/macro"

interface InputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

const InputContainer = styled.input`
  border: 1px solid black;
  font-size: 15px;
  padding: 2px 4px;

  ::placeholder {
    color: #b8b8b8;
  }
`

const Input = (props: InputProps) => {
  const { value, placeholder } = props

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    props.onChange(newValue)
  }

  return (
    <InputContainer
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Input
