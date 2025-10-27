import styled from "@emotion/styled"
import { breakpoints } from "@/styles/theme"

const Square = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.olive};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(45deg); /* 45deg makes a square look like a diamond */
  position: relative;

  border: 2px solid ${({ theme }) => theme.forest};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  position: absolute;
  top: -1rem;
  right: 2rem;
  z-index: 1000;

  ${breakpoints.mobile} {
    visibility: hidden;
  }
`

const Title = styled.div`
  transform: rotate(-45deg);
  font-weight: bold;
  font-size: 1rem;
  color: ${({ theme }) => theme.cream};
  text-align: center;
`

export const Base = ({ title }) => {
  return (
    <Square>
      <Title>{title}</Title>
    </Square>
  )
}
