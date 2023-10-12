'use client'
import { SelectCard, CardStyle, Container, CardText, CardIconStyle } from "~/assets/homepage-styles"
import { cardsInfo, type Card } from "~/constants"
import Video from "../video"
import { useRef } from "react"
import { useToast } from '@chakra-ui/react'

const HomeCard = () => {
  const toast = useToast()
  const videoRef = useRef<typeof Video>(null)
  const fetchRunScene = async (card: Card) => {
    const res = await fetch('/api/run_scene', {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({scene_type: card.type}),
    }).catch(err => {
      toast({
        title: '系统错误',
        description: "网络请求错误，请联系管理员",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      return err
    })
    return res.json()
  }
  const selectScene = async (card: Card) => {
    if (videoRef.current) {
      (videoRef.current as any).open(card)
    }
    const res = await fetchRunScene(card)
    console.log(res)
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
