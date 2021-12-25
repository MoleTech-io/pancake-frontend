import React from 'react'
import { useWeb3React } from '@web3-react/core'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { Flex, Text, Button, ButtonMenu, ButtonMenuItem, Message, Link } from '@pancakeswap/uikit'
import { FetchStatus } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { BASE_URL } from 'config'
import { NftToken } from 'state/nftMarket/types'
import { getBscScanLinkForNft } from 'utils'
import { Divider, RoundedImage } from '../shared/styles'
import { BorderedBox, MoleAmountCell } from './styles'
import { PaymentCurrency } from './types'

interface ReviewStageProps {
  nftToBuy: NftToken
  paymentCurrency: PaymentCurrency
  setPaymentCurrency: (index: number) => void
  nftPrice: number
  walletBalance: number
  walletFetchStatus: FetchStatus
  notEnoughBnbForPurchase: boolean
  continueToNextStage: () => void
}

const ReviewStage: React.FC<ReviewStageProps> = ({
  nftToBuy,
  paymentCurrency,
  setPaymentCurrency,
  nftPrice,
  walletBalance,
  walletFetchStatus,
  notEnoughBnbForPurchase,
  continueToNextStage,
}) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  return (
    <>
      <Flex px="24px" pt="24px" flexDirection="column">
        <Flex>
          <RoundedImage src={nftToBuy.image.thumbnail} height={68} width={68} mr="16px" />
          <Flex flexDirection="column" justifyContent="space-evenly">
            <Text color="textSubtle" fontSize="12px">
              {nftToBuy.collectionName}
            </Text>
            <Text bold>{nftToBuy.name}</Text>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="12px" color="textSubtle" p="0px" height="16px" mr="4px">
                {t('Token ID:')}
              </Text>
              <Button
                as={Link}
                scale="xs"
                px="0px"
                pt="2px"
                external
                variant="text"
                href={getBscScanLinkForNft(nftToBuy.collectionAddress, nftToBuy.tokenId)}
              >
                {nftToBuy.tokenId}
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <BorderedBox>
          <Text small color="textSubtle">
            {t('Pay with')}
          </Text>
          <Flex justifySelf="flex-end">
          <Text small color="textSubtle">
            {t('MOLE')}
          </Text>
          </Flex>
          {/* <ButtonMenu
            activeIndex={paymentCurrency}
            onItemClick={(index) => setPaymentCurrency(index)}
            scale="sm"
            variant="subtle"
          >
            <ButtonMenuItem>BNB</ButtonMenuItem>
            <ButtonMenuItem>MOLE</ButtonMenuItem>
          </ButtonMenu> */}
        
          <Text small color="textSubtle">
            {t('Total payment')}
          </Text>
          <MoleAmountCell bnbAmount={nftPrice} />
          <Text small color="textSubtle">
            {t('MOLE in wallet')}
          </Text>
          {!account ? (
            <Flex justifySelf="flex-end">
              <ConnectWalletButton scale="sm" />
            </Flex>
          ) : (
            <MoleAmountCell
              bnbAmount={walletBalance}
              isLoading={walletFetchStatus !== FetchStatus.SUCCESS}
              isInsufficient={walletFetchStatus === FetchStatus.SUCCESS && notEnoughBnbForPurchase}
            />
          )}
        </BorderedBox>
        {walletFetchStatus === FetchStatus.SUCCESS && notEnoughBnbForPurchase && (
          <Message p="8px" variant="danger">
            <Text>
              {t('Not enough MOLE to purchase this NFT')}
            </Text>
          </Message>
        )}
        <Flex alignItems="center">
          <Text my="16px" mr="4px">
            {t('Convert between BNB and MOLE for free')}:
          </Text>
          <Button
            as={Link}
            p="0px"
            height="16px"
            external
            variant="text"
            href={`${BASE_URL}/swap?inputCurrency=BNB&outputCurrency=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c`}
          >
            {t('Convert')}
          </Button>
        </Flex>
      </Flex>
      <Divider />
      <Flex px="24px" pb="24px" flexDirection="column">
        <Button
          onClick={continueToNextStage}
          disabled={walletFetchStatus !== FetchStatus.SUCCESS || notEnoughBnbForPurchase}
          mb="8px"
        >
          {t('Checkout')}
        </Button>
        <Button
          as={Link}
          external
          style={{ width: '100%' }}
          href={`${BASE_URL}/swap?outputCurrency=BNB`}
          variant="secondary"
        >
          {t('Get %symbol1% or %symbol2%', { symbol1: 'BNB', symbol2: 'MOLE' })}
        </Button>
      </Flex>
    </>
  )
}

export default ReviewStage
