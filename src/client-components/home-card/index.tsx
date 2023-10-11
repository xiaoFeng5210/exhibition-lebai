'use client'
import { SelectCard, CardStyle } from "~/assets/homepage-styles"

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
    <div className="w-[80%] flex-1 flex items-center">
        <SelectCard className="w-full">
          {
            cards.map((card, index) => {
              return (
                  <CardStyle key={index}></CardStyle>
              )
            })
          }
        </SelectCard>
    </div>
  )
}
export default HomeCard
