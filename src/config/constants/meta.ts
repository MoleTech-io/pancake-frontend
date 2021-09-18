import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MoleSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by MoleSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MoleSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('MoleSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('MoleSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('MoleSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('MoleSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('MoleSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MoleSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MoleSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('MoleSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MoleSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('MoleSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MoleSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MoleSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('MoleSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MoleSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MoleSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('MoleSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('MoleSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('MoleSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('MoleSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('MoleSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('MoleSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('MoleSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Pools')} | ${t('MoleSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    default:
      return null
  }
}
