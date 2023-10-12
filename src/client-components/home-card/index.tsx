'use client'
import { SelectCard, CardStyle, Container, CardText, CardIconStyle } from "~/assets/homepage-styles"
import { cardsInfo, type Card } from "~/constants"

const HomeCard = () => {
  const selectScene = (card: Card) => {
    console.log(card)
  }
  return (
    <Container>
      <SelectCard className="w-full">
        {
          cardsInfo.map((card, index) => {
            return (
              <div key={index} onClick={() => selectScene(card)}>
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
