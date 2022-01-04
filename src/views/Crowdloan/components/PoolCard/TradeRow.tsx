import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex, Button } from '@pancakeswap/uikit'
import { DeserializedPool } from 'state/types'
import BigNumber from 'bignumber.js'

const ContributeLabelContainer = styled(Flex)`
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`

interface ContributeRowProps {
  pool: DeserializedPool
  stakedBalance: BigNumber
  performanceFee?: number
}

const TradeRow: React.FC<ContributeRowProps> = ({ pool }) => {
  const { tradeLink } = pool

  return (
     <Flex alignItems="center" justifyContent="space-between">
      <ContributeLabelContainer alignItems="center">
      {tradeLink && <Link to={{ pathname: tradeLink }} target="_blank">
          <Button variant='primary'>Go to trade</Button>
        </Link>}
      {!tradeLink && <Button variant='secondary'>Not available</Button>}  
      </ContributeLabelContainer>
    </Flex>
  )
}

export default TradeRow
