import styled from 'styled-components'

export const Hero = styled.section`
  position: relative;

  img#hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }
`

export const HeroContent = styled.div`
  max-width: 1160px;
  padding: 92px 20px;
  margin: 0 auto;

  display: flex;
  gap: 56px;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 66px;
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    line-height: 130%;
    font-weight: 800;
    color: ${(props) => props.theme['base-title']};
  }

  > span {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      padding: 8px;
      border-radius: 999px;
    }
  }
`
