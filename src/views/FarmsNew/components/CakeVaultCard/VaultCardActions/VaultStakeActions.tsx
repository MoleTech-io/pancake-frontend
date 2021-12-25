import React from 'react'
import { Flex, Button, useModal, Skeleton } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import { DeserializedPool } from 'state/types'
import NotEnoughLPModal from '../../PoolCard/Modals/NotEnoughLPModal'
import VaultStakeModal from '../VaultStakeModal'
import HasSharesActions from './HasSharesActions'

interface VaultStakeActionsProps {
  pool: DeserializedPool
  stakingTokenBalance: BigNumber
  accountHasSharesStaked: boolean
  performanceFee: number
  isLoading?: boolean
}

const VaultStakeActions: React.FC<VaultStakeActionsProps> = ({
  pool,
  stakingTokenBalance,
  accountHasSharesStaked,
  performanceFee,
  isLoading = false,
}) => {
  const { stakingToken } = pool
  const { t } = useTranslation()
  const [onPresentTokenRequired] = useModal(<NotEnoughLPModal tokenSymbol={stakingToken.symbol} />)
  const [onPresentStake] = useModal(
    <VaultStakeModal stakingMax={stakingTokenBalance} pool={pool} performanceFee={performanceFee} />,
  )

  const renderStakeAction = () => {
    return accountHasSharesStaked ? (
      <HasSharesActions pool={pool} stakingTokenBalance={stakingTokenBalance} performanceFee={performanceFee} />
    ) : (
      <Button onClick={stakingTokenBalance.gt(0) ? onPresentStake : onPresentTokenRequired}>{t('Stake')}</Button>
    )
  }

  return <Flex flexDirection="column">{isLoading ? <Skeleton width="100%" height="52px" /> : renderStakeAction()}</Flex>
}

export default VaultStakeActions
