import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 2em;
`

export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`

export const Input = styled.input`
  border-radius: 5px;
  padding: 4px 0.5em;
  border: 1px solid #dce1e6;
  outline: none;
  color: #2c3f57;

  ::-webkit-input-placeholder {
    color: #80a8c9;
  }
`