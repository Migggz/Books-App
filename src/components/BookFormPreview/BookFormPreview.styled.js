import styled from "styled-components"
import Select from "react-select"
import { rgba, resetButton } from "../../utils/style-utils"

export const Title = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 30px;
`
export const Form = styled.form``
export const Label = styled.label`
  display: block;
  font-size: 1.6rem;
  color: #666;
  margin-bottom: 20px;
`
export const Input = styled.input`
  margin-top: 5px;
  border-radius: 4px;
  display: block;
  font-size: 1.8rem;
  outline: none;
  width: 100%;
  padding: 6px 12px;
  transition: 0.3s ease all;
  font-weight: 500;
  border: 1px solid #ccc;
  &:focus {
    border-color: #4a47a3;
    box-shadow: 0 0 8px ${rgba("#000", 0.1)};
  }
`
export const Error = styled.span`
  display: block;
  font-size: 1.4rem;
  color: #c02739;
  margin: 5px 0 0 5px;
  font-weight: 500;
`
export const Split = styled.div`
  display: flex;
  justify-content: space-between;
  ${Label} {
    width: 49%;
  }
`
export const StyledSelect = styled(Select)`
  margin-top: 5px;
`
export const TextArea = styled.textarea`
  display: block;
  margin-top: 5px;
  border: 1px solid #ccc;
  transition: 0.3s ease all;
  resize: none;
  width: 100%;
  border-radius: 4px;
  font-size: 1.6rem;
  outline: none;
  color: #666;
  padding: 6px 12px;
  height: 200px;
  &:focus {
    border-color: #4a47a3;
    box-shadow: 0 0 8px ${rgba("#000", 0.1)};
  }
`
export const ButtonsList = styled.div`
  display: flex;
`
export const SubmitButton = styled.input`
  ${resetButton()}
  color: #fff;
  border-radius: 4px;
  background: #3fc1c9;
  font-weight: 500;
  padding: 10px 40px;
  transition: 0.3s ease background;
  margin-right: 30px;
  &:active {
    background: #37a2a9;
  }
`
export const CancelButton = styled.button`
  ${resetButton()}
  color: #333;
  border-radius: 4px;
  background: #ccc;
  font-weight: 500;
  padding: 10px 20px;
  transition: 0.3s ease background;
  &:active {
    background: #bbb;
  }
`
