import styled from 'styled-components'

export const CardContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2px;
  padding: 12px;
  position: relative;
  cursor: pointer;

  height: 300px;
  width: 200px;
  margin-top: 12px;

  overflow: hidden;

  img {
    width: 150px;
    height: 150px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 180px;
    min-height: 100px;
    border-top: 1px solid #ddd;

    text-align: left;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #404040;
  }

  button {
    position: absolute;
    margin-right: 4px;
    top: 0;
    right: 0;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .currency {
    font-weight: 600;
  }

  transition: ease-in-out 0.1s;
  &:hover {
    box-shadow: 0px 0px 6px 1px #343a40;
  }
`
