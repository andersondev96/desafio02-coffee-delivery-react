import { Coffee, Cube, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import CoffeeImg from '../../../assets/coffe.png'
import { Heading, Hero, HeroContent, Info } from './styles'

export function Banner() {
  const theme = useTheme()

  return (
    <div>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>

            <Info>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.background}
                  style={{ backgroundColor: theme['yellow-dark'] }}
                />
                <span>Compra simples e segura</span>
              </div>
              <div>
                <Cube
                  size={32}
                  weight="fill"
                  color={theme.background}
                  style={{ backgroundColor: theme['base-text'] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.background}
                  style={{ backgroundColor: theme.yellow }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>
              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.background}
                  style={{ backgroundColor: theme.purple }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </Info>
          </div>

          <img src={CoffeeImg} alt="" />
        </HeroContent>
        <img src="/images/hero-bg.svg" id="hero-bg" alt="" />
      </Hero>
    </div>
  )
}
