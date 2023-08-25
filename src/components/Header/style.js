import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 100px;
  background-color: #34f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`

export const Image = styled.img`
  width: 50px;
  height: 50px;
`
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    padding: 8px;
    border: none;
    border-radius: 10px;
    margin-left: 4px;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
