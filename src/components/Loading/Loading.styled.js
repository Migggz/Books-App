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
const flash = keyframes`
  from {
    background: #ddd;
  }
  50% {
    background: #eee;
  }
  to {
    background: #ddd;
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

export const ImgSpinner = styled.div`
  min-width: 250px;
  max-width: 250px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ddd;
  animation: ${flash} 2s ease infinite;
`
