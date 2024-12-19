import { useAuth } from '@/hooks/use-auth'
import { ActionIcon, Popover, Text } from '@mantine/core'
import { IconUser, IconUserQuestion } from '@tabler/icons-react'
import { useEffect } from 'react'

export default function User() {
  const { loading, authState, isAuth } = useAuth()

  useEffect(() => {
    const unsubscribe = authState()
    return () => unsubscribe()
  }, [authState])

  return (
    <>
      <Popover
        width={340}
        offset={0}
        position='bottom'
        withArrow
        shadow='md'
        arrowSize={12}
      >
        <Popover.Target>
          <ActionIcon
            variant='transparent'
            size='lg'
            radius='xl'
            aria-label='Settings'
            className='navIcon'
            loading={loading}
          >
            {isAuth ? <IconUser /> : <IconUserQuestion />}
          </ActionIcon>
        </Popover.Target>

        <Popover.Dropdown>
          <Text size='sm'>profil, support och inställningar mm...</Text>
        </Popover.Dropdown>
      </Popover>
    </>
  )
}
