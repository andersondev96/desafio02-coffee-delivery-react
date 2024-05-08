import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 0 20px 20px;
  border-radius: 6px 36px;
  width: 256px;

  display: flex;
  flex-direction: column;

  text-align: center;
`

export const CoffeeImg = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
  align-self: center;
`
export const Tags = styled.div`
  margin-top: 12px;

  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-size: 0.625rem;
    line-height: 130%;
    font-weight: 700;
  }
`

export const Title = styled.h3`
  margin-top: 16px;

  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  line-height: 130%;
  font-weight: 700;
`

export const Description = styled.span`
  margin-top: 8px;
  width: 100%;

  color: ${(props) => props.theme['base-label']};
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  line-height: 130%;
  font-weight: 400;
`

export const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }

  span:last-child {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    line-height: 130%;
    font-weight: 800;
    color: ${(props) => props.theme['base-text']};
  }
`

export const Order = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme['yellow-dark'] : theme['purple-dark']};
    transition: background-color 0.2s;
    border-radius: 6px;
    padding: 8px;
    display: flex;

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme.yellow : theme.purple};
    }
  }
`
