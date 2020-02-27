import styled, { keyframes } from "styled-components"
import { AiOutlineLoading } from "react-icons/ai"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Spinner = styled(AiOutlineLoading)`
  animation: ${rotate} 1s linear infinite;
  font-size: 4rem;
`
