enum SceneType {
  boil = 'boil',
  icecream = 'icecream',
  fried = 'fried',
  coffee = 'coffee',
  palletizing = 'palletizing'
}

export interface Card {
  name: string
  icon?: string
  type: SceneType
}

export const cardsInfo: Card[] = [
  {
    name: '煮面',
    icon: '/image/boil.png',
    type: SceneType.boil
  },
  {
    name: '冰淇淋',
    icon: '/image/boil.png',
    type: SceneType.icecream
  },
  {
    name: '炸雞',
    icon: '/image/boil.png',
    type: SceneType.fried
  },
  {
    name: '咖啡',
    icon: '/image/coffee.png',
    type: SceneType.coffee
  },
  {
    name: '视觉码垛',
    icon: '/image/boil.png',
    type: SceneType.palletizing,
  }
]
