import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex, Button } from '@pancakeswap/uikit'
import { DeserializedPool } from 'state/types'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'

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

const ContributeRow: React.FC<ContributeRowProps> = ({ pool }) => {
  const { t } = useTranslation()
  const { crowdloanLink, bonus } = pool

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <ContributeLabelContainer alignItems="center">
        <Link to={{ pathname: crowdloanLink }} target="_blank">
          <Button variant='primary'>{t(bonus)}</Button>
        </Link>    
      </ContributeLabelContainer>
    </Flex>
  )
}

export default ContributeRow
