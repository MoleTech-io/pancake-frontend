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

const TradeCell: React.FC<AprCellProps> = ({ pool }) => {
  const { t } = useTranslation()
  const { tradeLink } = pool
  return (
    <StyledCell role="cell">
      <CellContent>
      {tradeLink && <Link to={{ pathname: tradeLink }} target="_blank">
          <Button variant='primary'>Available To trade</Button>
        </Link>}
      {!tradeLink && <Button variant='secondary'>Not available</Button>}
      </CellContent>
    </StyledCell>
  )
}

export default TradeCell
