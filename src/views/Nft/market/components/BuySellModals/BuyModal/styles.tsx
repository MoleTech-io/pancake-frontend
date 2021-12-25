import React from 'react'
import styled from 'styled-components'
import { Modal, Grid, Flex, Text, MoleIcon, Skeleton } from '@pancakeswap/uikit'
import { useMoleBusdPrice } from 'hooks/useBUSDPrice'
import { multiplyPriceByAmount } from 'utils/prices'
import { BuyingStage } from './types'

export const StyledModal = styled(Modal)<{ stage: BuyingStage }>`
  & > div:last-child {
    padding: 0;
  }
  & h2:first-of-type {
    ${({ stage, theme }) =>
      stage === BuyingStage.APPROVE_AND_CONFIRM || stage === BuyingStage.CONFIRM
        ? `color: ${theme.colors.textSubtle}`
        : null};
  }
  & svg:first-of-type {
    ${({ stage, theme }) =>
      stage === BuyingStage.APPROVE_AND_CONFIRM || stage === BuyingStage.CONFIRM
        ? `fill: ${theme.colors.textSubtle}`
        : null};
  }
`

export const BorderedBox = styled(Grid)`
  margin: 16px 0;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.radii.default};
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 8px;
`

interface MoleAmountCellProps {
  bnbAmount: number
  isLoading?: boolean
  isInsufficient?: boolean
}

export const MoleAmountCell: React.FC<MoleAmountCellProps> = ({ bnbAmount, isLoading, isInsufficient }) => {
  const moleBusdPrice = useMoleBusdPrice()
  if (isLoading) {
    return (
      <Flex flexDirection="column" justifySelf="flex-end">
        <Skeleton width="86px" height="20px" mb="6px" />
        <Skeleton width="86px" height="20px" />
      </Flex>
    )
  }
  const usdAmount = multiplyPriceByAmount(moleBusdPrice, bnbAmount)
  return (
    <Flex justifySelf="flex-end" flexDirection="column">
      <Flex justifyContent="flex-end">
        <MoleIcon height={16} width={16} mr="4px" />
        <Text bold color={isInsufficient ? 'failure' : 'text'}>{`${bnbAmount.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`}</Text>
      </Flex>
      <Text small color="textSubtle" textAlign="right">
        {`($${usdAmount.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })})`}
      </Text>
    </Flex>
  )
}
