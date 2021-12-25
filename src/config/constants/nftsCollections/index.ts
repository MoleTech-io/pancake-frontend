import { Collections, CollectionKey } from './types'

const collections: Collections = {
  [CollectionKey.PANCAKE]: {
    name: 'Pancake Bunnies',
    slug: 'pancake-bunnies',
    address: {
      56: '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07',
      97: '0x60935F36e4631F73f0f407e68642144e07aC7f5E',
    },
  },
  [CollectionKey.SQUAD]: {
    name: 'Insight Squad',
    description: "Insight finance channel's first official generative NFT collection.. Join the squad.",
    slug: 'insight-squad',
    address: {
      56: '0xBF61e6dF4e53EeE40F36b51b624EF9F4dFef2104',
      97: '',
    },
  },
}

export default collections
