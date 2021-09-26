import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://moletech.io/#section13',
      },
      {
        label: t('Blog'),
        href: 'https://insightcj.com',
      },
      {
        label: t('Community'),
        href: 'https://t.me/molewallet',
      },
      {
        label: t('MOLE token'),
        href: 'https://moletech.io',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://moletech.io',
        isHighlighted: true,
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://moletech.io',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://moletech.io',
      },
      {
        label: t('Guides'),
        href: 'https://moletech.io',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/MoleTech-io',
      },
      {
        label: t('Documentation'),
        href: 'https://moletech.io',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://moletech.io',
      },
      {
        label: t('Audits'),
        href: 'https://moletech.io',
      },
      {
        label: t('Careers'),
        href: 'https://moletech.io',
      },
    ],
  },
]
