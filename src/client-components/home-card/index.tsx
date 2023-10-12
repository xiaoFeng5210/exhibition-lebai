'use client'
import { SelectCard, CardStyle, Container, CardText, CardIconStyle } from "~/assets/homepage-styles"

const HomeCard = () => {
  const cards = [
    {
      name: '煮面',
      icon: '🍜',
      type: 'boil'
    },
    {
      name: '冰淇淋',
      icon: '🍦',
      type: 'icecream'
    },
    {
      name: '炸雞',
      icon: '🍗',
      type: 'fried'
    },
    {
      name: '咖啡',
      icon: '☕',
      type: 'coffee'
    },
    {
      name: '视觉码垛',
      type: 'palletizing'

    }
  ]
  return (
    <Container>
        <SelectCard className="w-full">
          {
            cards.map((card, index) => {
              return (
                <div key={index}>
                  <CardStyle>
                    <CardIconStyle>{card.icon}</CardIconStyle>
                  </CardStyle>
                  <CardText>{card.name}</CardText>
                </div>
              )
            })
          }
        </SelectCard>
    </Container>
  )
}
export default HomeCard
