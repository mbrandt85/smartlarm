import { useAuth } from '@/hooks/use-auth'
import { ActionIcon, Popover, Text } from '@mantine/core'
import { IconUserCircle } from '@tabler/icons-react'
import { useEffect } from 'react'

export default function User() {
  const { loading, authState } = useAuth()

  useEffect(() => {
    const unsubscribe = authState()
    return () => unsubscribe()
  }, [authState])

  return (
    <>
      <Popover width={360} position='bottom' withArrow shadow='md'>
        <Popover.Target>
          <ActionIcon
            variant='transparent'
            size='lg'
            radius='xl'
            aria-label='Settings'
            className='navIcon'
            loading={loading}
          >
            <IconUserCircle />
          </ActionIcon>
        </Popover.Target>

        <Popover.Dropdown>
          <Text size='sm'>
            This popover is shown when user hovers the target element
          </Text>
        </Popover.Dropdown>
      </Popover>
    </>
  )
}
