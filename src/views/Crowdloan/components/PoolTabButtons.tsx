import React from 'react'
import { ViewMode } from 'state/user/actions'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import ToggleView from './ToggleView/ToggleView'

const ViewControls = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    padding: 8px 0px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
    width: auto;

    > div {
      padding: 0;
    }
  }
`

const PoolTabButtons = ({  viewMode, setViewMode }) => {
  const { t } = useTranslation()

  const viewModeToggle = <ToggleView viewMode={viewMode} onToggle={(mode: ViewMode) => setViewMode(mode)} />

  return (
    <ViewControls>
      {viewModeToggle}
    </ViewControls>
  )
}

export default PoolTabButtons
