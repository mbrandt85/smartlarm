import { ActionIcon } from '@mantine/core'
import { IconShoppingBag } from '@tabler/icons-react'

export default function Cart() {
  return (
    <ActionIcon
      variant='transparent'
      className='navIcon'
      size='lg'
      radius='xl'
      aria-label='Cart'
    >
      <IconShoppingBag />
    </ActionIcon>
  )
}
