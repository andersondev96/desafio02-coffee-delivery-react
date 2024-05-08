import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Aside, Container } from './styles'

import { useEffect, useState } from 'react'
import Logo from '../../assets/logo.svg'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cart } = useCart()
  const [localization, setLocalization] = useState('')

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude

        const geoCodingApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`

        fetch(geoCodingApiUrl)
          .then((response) => response.json())
          .then((data) => {
            if (data.status === 'OK' && data.results.length > 0) {
              const result = data.results[0]
              console.log(result)
              const addressComponents = result.address_components

              const city = addressComponents.find((component: any) =>
                component.types.includes('administrative_area_level_2'),
              )?.long_name
                ? addressComponents.find((component: any) =>
                    component.types.includes('administrative_area_level_2'),
                  )?.long_name
                : ''

              setLocalization(`${city}`)
            }
          })
      })
    }
  }, [])

  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Coffee Delivery" />
      </Link>

      <Aside>
        <div>
          <MapPin size={32} weight="fill" />
          <span>{localization}</span>
        </div>

        <Link to={`checkout`} aria-disabled={cart.length === 0}>
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </Aside>
    </Container>
  )
}
