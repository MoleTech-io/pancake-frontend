import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { useMatchBreakpoints } from '@pancakeswap/uikit'
import { DeserializedPool } from 'state/types'
import useDelayedUnmount from 'hooks/useDelayedUnmount'
import NameCell from './Cells/NameCell'
import EarningsCell from './Cells/EarningsCell'
import ContributeCell from './Cells/ContributeCell'
import TotalStakedCell from './Cells/TotalStakedCell'
import EndsInCell from './Cells/EndsInCell'
import ExpandActionCell from './Cells/ExpandActionCell'
import ActionPanel from './ActionPanel/ActionPanel'
import AutoEarningsCell from './Cells/AutoEarningsCell'


interface PoolRowProps {
  pool: DeserializedPool
  account: string
  userDataLoaded: boolean
}

const StyledRow = styled.div`
  background-color: transparent;
  display: flex;
  cursor: pointer;
`

const PoolRow: React.FC<PoolRowProps> = ({ pool, account, userDataLoaded }) => {
  const { isXs, isSm, isMd, isLg, isXl, isXxl, isTablet, isDesktop } = useMatchBreakpoints()
  const isLargerScreen = isLg || isXl || isXxl
  const [expanded, setExpanded] = useState(false)
  const shouldRenderActionPanel = useDelayedUnmount(expanded, 300)
  const { t } = useTranslation()

  const toggleExpanded = () => {
    setExpanded((prev) => !prev)
  }

  return (
    <>
      <StyledRow role="row" onClick={toggleExpanded}>
        <NameCell pool={pool} />
        {pool.isAutoVault ? (
          <AutoEarningsCell pool={pool} account={account} userDataLoaded={userDataLoaded} />
        ) : (
          <EarningsCell pool={pool} account={account} userDataLoaded={userDataLoaded} />
        )}
        
        {isDesktop && <EndsInCell pool={pool} />}
        {isLargerScreen && <TotalStakedCell pool={pool} />}
        <ExpandActionCell expanded={expanded} isFullLayout={isTablet || isDesktop} />
        <ContributeCell pool={pool} />
      </StyledRow>
      {shouldRenderActionPanel && (
        <ActionPanel
          account={account}
          pool={pool}
          userDataLoaded={userDataLoaded}
          expanded={expanded}
          breakpoints={{ isXs, isSm, isMd, isLg, isXl, isXxl }}
        />
      )}
    </>
  )
}

export default PoolRow
