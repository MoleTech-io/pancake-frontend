import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    isLp: false,
    isUnlimited: true,
  },
  {
    sousId: 1,
    stakingToken: serializedTokens.mole,
    earningToken: serializedTokens.mole,
    contractAddress: {
      97: '',
      56: '0x978b25c4Df40cc4cF1B59E5819130e998Aa2138A',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.05',
    sortOrder: 1,
    isFinished: false,
    isLp: false,
    isUnlimited: true,
  },
  {
    sousId: 2,
    stakingToken: serializedTokens['MOLE-BUSD'],
    earningToken: serializedTokens.mole,
    contractAddress: {
      97: '',
      56: '0x2BdB917097d0FE0afFDAe3AF8eAFF1C6C126BAa1',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 3,
    tokenPerBlock: '0.1',
    isFinished: false,
    isLp: true,
    isUnlimited: true,
  },
  {
      sousId: 220,
      stakingToken: serializedTokens['MOLE-BUSD'],
      earningToken: serializedTokens.mole,
      contractAddress: {
        97: '',
        56: '0x74Ba18DDc80CC70Dda2c83e0e9e4F427907fBa76',
      },
      poolCategory: PoolCategory.CORE,
      harvest: true,
      sortOrder: 2,
      tokenPerBlock: '0.08',
      isFinished: false,
      isLp: true,
      isUnlimited: false,
  },
    // DSC TEST for MOLE-BUST LP start
    // {
    //   sousId: 999,
    //   stakingToken: serializedTokens["dsc-babymole"],
    //   earningToken: serializedTokens.dsc,
    //   contractAddress: {
    //     97: '',
    //     56: '0x4B248CDef331C7089F9ffAaF9E4b82b2347B3EfF',
    //   },
    //   poolCategory: PoolCategory.CORE,
    //   harvest: true,
    //   sortOrder: 999,
    //   tokenPerBlock: '0.034',
    //   isFinished: false,
    //   isLp: true,
    //   isUnlimited: false,
    // },
    // DSC TEST for MOLE-BUST LP end
]

export default pools
