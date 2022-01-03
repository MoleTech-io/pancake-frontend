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
    isCrowdloan:false,
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
    tokenPerBlock: '0.12',
    sortOrder: 1,
    isFinished: false,
    isLp: false,
    isUnlimited: true,
    isCrowdloan:false,
    rewardsToken: 1200000000000000000000000,
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
    isCrowdloan:false,
    isUnlimited: true,
  },
  {
    sousId: 3,
    stakingToken: serializedTokens['MOLE-BNB'],
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '',
      56: '0x925Bbd7bE5dA8C3DBc0d4870be429fFcf166C969',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 3,
    tokenPerBlock: '0.0002',
    isFinished: false,
    isLp: true,
    isCrowdloan:false,
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
      isFinished: true,
      isLp: true,
      isCrowdloan:false,
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
    {
      sousId: 221,
      stakingToken: serializedTokens.mole,
      earningToken: serializedTokens.too,
      contractAddress: {
        97: '0x7D0a43a56c2702758D1b2D94DE5b9d0b3954EbE0',
        56: '0x7D0a43a56c2702758D1b2D94DE5b9d0b3954EbE0',
      },
      poolCategory: PoolCategory.CORE,
      harvest: true,
      tokenPerBlock: '56',
      sortOrder: 1,
      isFinished: false,
      isLp: false,
      isCrowdloan:false,
      isUnlimited: false,
    },
    {
      sousId: 222,
      stakingToken: serializedTokens.mole,
      earningToken: serializedTokens.maca,
      contractAddress: {
        97: '',
        56: '0xd2A82E781AB050C2D55c6c264D631f9E8CCbeBA8',
      },
      poolCategory: PoolCategory.CORE,
      harvest: true,
      tokenPerBlock: '0.02471315',
      sortOrder: 1,
      isFinished: false,
      isLp: false,
      isCrowdloan:false,
      isUnlimited: false,
    },
    {
      sousId: 223,
      stakingToken: serializedTokens.mole,
      earningToken: serializedTokens.mglmr,
      contractAddress: {
        97: '',
        56: '0x21450aB3EE219a425180f63d9bEb0d27ed5ABCd7',
      },
      poolCategory: PoolCategory.CORE,
      harvest: true,
      tokenPerBlock: '0.02471315',
      sortOrder: 1,
      isFinished: false,
      isLp: false,
      isCrowdloan:false,
      isUnlimited: false,
    },
    {
      sousId: 224,
      stakingToken: serializedTokens.mole,
      earningToken: serializedTokens.mastr,
      contractAddress: {
        97: '',
        56: '0xCE836802758DAA2cFd37f52Fb722D5fda591eC1c',
      },
      poolCategory: PoolCategory.CORE,
      harvest: true,
      tokenPerBlock: '0.02471315',
      sortOrder: 1,
      isFinished: false,
      isLp: false,
      isCrowdloan:false,
      isUnlimited: false,
    },
    {
      sousId: 225,
      stakingToken: serializedTokens.mole,
      earningToken: serializedTokens.mpara,
      contractAddress: {
        97: '',
        56: '0xF1763B86EACd610E7D01B937d131e380A3FC8000',
      },
      poolCategory: PoolCategory.CORE,
      harvest: true,
      tokenPerBlock: '0.02471315',
      sortOrder: 1,
      isFinished: false,
      isLp: false,
      isCrowdloan:false,
      isUnlimited: false,
    },
    {
      sousId: 226,
      stakingToken: serializedTokens.mole,
      earningToken: serializedTokens.mclv,
      contractAddress: {
        97: '',
        56: '0xd3c144aAB35b735c92a56a5EEa87564b8a845f16',
      },
      poolCategory: PoolCategory.CORE,
      harvest: true,
      tokenPerBlock: '0.02471315',
      sortOrder: 1,
      isFinished: false,
      isLp: false,
      isCrowdloan:false,
      isUnlimited: false,
    },
    {
      sousId: 227,
      stakingToken: serializedTokens.mole,
      earningToken: serializedTokens.mefi,
      contractAddress: {
        97: '',
        56: '0x011a2f305a39f93f3799f1d3f51f7e44a6b8149e',
      },
      poolCategory: PoolCategory.CORE,
      harvest: true,
      tokenPerBlock: '0.02471315',
      sortOrder: 1,
      isFinished: false,
      isLp: false,
      isCrowdloan:false,
      isUnlimited: false,
    },
    {
      sousId: 228,
      stakingToken: serializedTokens.mole,
      earningToken: serializedTokens.mcfg,
      contractAddress: {
        97: '',
        56: '0x5C46b65387c17A07D526Fc7dA9Ab86F53da73374',
      },
      poolCategory: PoolCategory.CORE,
      harvest: false,
      tokenPerBlock: '0.02471315',
      sortOrder: 1,
      isFinished: false,
      isLp: false,
      isCrowdloan:true,
      isUnlimited: false,
      crowdloanLink:'https://centrifuge.io/parachain/crowdloan/?refer=Q0cytb2sab78VqhWe7Eb',
      bonus: 'Contribute ~30%+5%'
    },
    {
      sousId: 229,
      stakingToken: serializedTokens.mole,
      earningToken: serializedTokens.mlayr,
      contractAddress: {
        97: '',
        56: '0x51078a84030922d76f2C0e8E879450Eae5316805',
      },
      poolCategory: PoolCategory.CORE,
      harvest: false,
      tokenPerBlock: '0.02471315',
      sortOrder: 1,
      isFinished: false,
      isLp: false,
      isCrowdloan:true,
      isUnlimited: false,
      crowdloanLink:'https://crowdloan.parallel.fi/#/auction/contribute/polkadot/2019?referral=0x7a131ba16aec4e5e7d975d55e63eea77990391571b142ce0180ce75c9c659205',
      bonus: 'Contribute ~15%'
    },
    {
      sousId: 230,
      stakingToken: serializedTokens.mole,
      earningToken: serializedTokens.mintr,
      contractAddress: {
        97: '',
        56: '0x98a078379D73f726C0E15B66735F76999022e260',
      },
      poolCategory: PoolCategory.CORE,
      harvest: false,
      tokenPerBlock: '0.02471315',
      sortOrder: 1,
      isFinished: false,
      isLp: false,
      isCrowdloan:true,
      isUnlimited: false,
      crowdloanLink:'https://crowdloan.interlay.io?referral=0x14e5856bf7f241ac542ede4d9eddf85bc695725834bbb1e662a2a089c9b1fd5e',
      bonus: 'Contribute +5%'
    },
    {
      sousId: 231,
      stakingToken: serializedTokens.mole,
      earningToken: serializedTokens.mlit,
      contractAddress: {
        97: '',
        56: '0xFf8E2F2ba952B8F65f95386a0A2C9Aa9561b5335',
      },
      poolCategory: PoolCategory.CORE,
      harvest: false,
      tokenPerBlock: '0.02471315',
      sortOrder: 1,
      isFinished: false,
      isLp: false,
      isCrowdloan:true,
      isUnlimited: false,
      crowdloanLink:'https://crowdloan.litentry.com/?source=QH2RGI',
      bonus: 'Contribute ~25%+2.5%'
    },


    
]

export default pools
