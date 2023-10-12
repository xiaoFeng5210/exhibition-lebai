'use client'
import { SelectCard, CardStyle, Container, CardText, CardIconStyle } from "~/assets/homepage-styles"
import { cardsInfo, type Card } from "~/constants"
import Video from "../video"
import { useRef } from "react"

const HomeCard = () => {
  const videoRef = useRef<typeof Video>(null)
  const selectScene = (card: Card) => {
    if (videoRef.current) {
      (videoRef.current as any).open(card)
    }
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
      <Video ref={videoRef} />
    </Container>
  )
}
export default HomeCard
