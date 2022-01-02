import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '@pancakeswap/uikit'
import { DeserializedPool } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import BaseCell, { CellContent } from './BaseCell'

interface AprCellProps {
  pool: DeserializedPool
}

const StyledCell = styled(BaseCell)`
  flex: 1 0 50px;
  ${({ theme }) => theme.mediaQueries.md} {
    flex: 0 0 120px;
  }
`

const ContributeCell: React.FC<AprCellProps> = ({ pool }) => {
  const { t } = useTranslation()
  const { crowdloanLink, bonus } = pool
  return (
    <StyledCell role="cell">
      <CellContent>
        <Link to={{ pathname: crowdloanLink }} target="_blank">
          <Button variant='primary'>{t(bonus)}</Button>
        </Link>
      </CellContent>
    </StyledCell>
  )
}

export default ContributeCell
