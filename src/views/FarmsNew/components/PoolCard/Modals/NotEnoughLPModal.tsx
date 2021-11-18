import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { Modal, Text, Button } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'

interface NotEnoughLPModalPropsProps {
  tokenSymbol: string
  onDismiss?: () => void
}

const NotEnoughLPModalProps: React.FC<NotEnoughLPModalPropsProps> = ({ tokenSymbol, onDismiss }) => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <Modal
      title={t('%symbol% required', { symbol: tokenSymbol })}
      onDismiss={onDismiss}
      headerBackground={theme.colors.gradients.cardHeader}
    >
      <Text color="failure" bold>
        {t('Insufficient %symbol% balance', { symbol: tokenSymbol })}
      </Text>
      <Text mt="24px">{t('You’ll need %symbol% to stake in this pool!', { symbol: tokenSymbol })}</Text>
      <Text>
        {t('Buy some %symbol%, or make sure your %symbol% isn’t in another pool or LP.', {
          symbol: tokenSymbol,
        })}
      </Text>
      <Button mt="24px" as="a" external href="/liquidity">
        {t('Get')} {tokenSymbol}
      </Button>
      <Button variant="text" onClick={onDismiss}>
        {t('Close Window')}
      </Button>
    </Modal>
  )
}

export default NotEnoughLPModalProps
