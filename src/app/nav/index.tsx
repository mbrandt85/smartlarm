import { Card, NavLink } from '@mantine/core'
import {
  IconAddressBook,
  IconBook,
  IconCurrencyDollar,
  IconDiscount,
  IconLayoutGrid,
  IconNews,
  IconQuestionMark,
} from '@tabler/icons-react'

const Links = () => (
  <>
    <NavLink
      label='Kampanjer'
      href='#required-for-focus'
      leftSection={<IconDiscount size='1rem' />}
    />
    <NavLink
      label='Fyndhörnan'
      href='#required-for-focus'
      leftSection={<IconCurrencyDollar size='1rem' />}
    />

    <NavLink
      href='#required-for-focus'
      label='Produkter'
      leftSection={<IconLayoutGrid size='1rem' />}
    >
      <NavLink href='#required-for-focus' label='First child link' />
      <NavLink label='Second child link' href='#required-for-focus' />
      <NavLink label='Nested parent link' href='#required-for-focus'>
        <NavLink label='First child link' href='#required-for-focus' />
        <NavLink label='Second child link' href='#required-for-focus' />
        <NavLink label='Third child link' href='#required-for-focus' />
      </NavLink>
    </NavLink>

    <NavLink
      href='#required-for-focus'
      label='Vägledning'
      leftSection={<IconBook size='1rem' />}
    >
      <NavLink label='First child link' href='#required-for-focus' />
      <NavLink label='Second child link' href='#required-for-focus' />
      <NavLink label='Third child link' href='#required-for-focus' />
    </NavLink>

    <NavLink
      label='Nyheter'
      href='#required-for-focus'
      leftSection={<IconNews size='1rem' />}
    />
    <NavLink
      label='Om oss'
      href='#required-for-focus'
      leftSection={<IconQuestionMark size='1rem' />}
    />
    <NavLink
      label='Kontakt'
      href='#required-for-focus'
      leftSection={<IconAddressBook size='1rem' />}
    />
  </>
)

export default function Nav({ mobile }: { mobile: boolean }) {
  return mobile ? (
    <Links />
  ) : (
    <Card shadow='sm' padding='xs' radius='md'>
      <Links />
    </Card>
  )
}
