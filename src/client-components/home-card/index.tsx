'use client'
import { SelectCard, CardStyle, Container, CardText, CardIconStyle } from "~/assets/homepage-styles"

const HomeCard = () => {
  const cards = [
    {
      name: '煮面',
      icon: '🍜'
    },
    {
      name: '冰淇淋',
      icon: '🍦'
    },
    {
      name: '炸雞',
      icon: '🍗'
    },
    {
      name: '蛋糕',
      icon: '🍰'
    },
    {
      name: '漢堡',
      icon: '🍔'
    },
    {
      name: '咖啡',
      icon: '☕'
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
