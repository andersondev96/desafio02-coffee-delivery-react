import { coffees } from '../../../data.json'
import { Card } from '../../components/Card'
import { Banner } from './Banner'
import { CoffeeList, Container } from './styles'

export function Home() {
  return (
    <Container>
      <Banner />
      <CoffeeList>
        <h2>Nossos Cafés</h2>

        <div>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </Container>
  )
}
