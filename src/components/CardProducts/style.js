import styled from 'styled-components'

export const CardContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 12px;

  background-color: #c1daf7;

  height: 300px;
  width: 200px;
  margin-top: 12px;
  border: solid 1px #000;
  overflow: hidden;

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    min-height: 100px;
    font-size: 12px;
  }

  img {
    width: 200px;
    height: 200px;
  }

  /* width: 300px;
  height: 400px; */
`
