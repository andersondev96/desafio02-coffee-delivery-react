import styled from 'styled-components'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-input']};

  transition: all 0.2s;

  &[data_state='focused'] {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  input {
    color: ${(props) => props.theme['base-text']};
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 12px;
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  span {
    color: ${(props) => props.theme['base-label']};
    padding-right: 12px;
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    line-height: 130%;
    font-weight: 700;
    font-style: italic;
  }
`
export const ErrorMessage = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  line-height: 130%;
  font-weight: 400;
  color: red;
`
