import {
  rem,
  ActionIcon,
  UnstyledButton,
  Group,
  Text,
  Kbd,
} from '@mantine/core'
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight'
import {
  IconHome,
  IconDashboard,
  IconFileText,
  IconSearch,
} from '@tabler/icons-react'
import styles from './search.module.css'
import { useOs } from '@mantine/hooks'

const actions: SpotlightActionData[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'Get to home page',
    onClick: () => console.log('Home'),
    leftSection: (
      <IconHome style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
    ),
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Get full information about current system status',
    onClick: () => console.log('Dashboard'),
    leftSection: (
      <IconDashboard style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
    ),
  },
  {
    id: 'documentation',
    label: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onClick: () => console.log('Documentation'),
    leftSection: (
      <IconFileText style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
    ),
  },
]

export default function Search({ mobile }: { mobile?: boolean }) {
  const os = useOs()

  return (
    <>
      {mobile ? (
        <ActionIcon
          onClick={spotlight.open}
          variant='transparent'
          size='lg'
          radius='xl'
          aria-label='Search'
          className='navIcon'
        >
          <IconSearch />
        </ActionIcon>
      ) : (
        <UnstyledButton className={styles.search} onClick={spotlight.open}>
          <Group justify='space-between'>
            <Group gap='xs'>
              <IconSearch />
              <Text>Sök produkter...</Text>
            </Group>

            <Kbd size='xs'>{os === 'ios' ? 'Cmd' : 'Ctrl'} + K</Kbd>
          </Group>
        </UnstyledButton>
      )}

      <Spotlight
        actions={actions}
        nothingFound='Tyvärr, kan inte hitta något...'
        highlightQuery
        searchProps={{
          leftSection: (
            <IconSearch
              style={{ width: rem(20), height: rem(20) }}
              stroke={1.5}
            />
          ),
          placeholder: 'Sök produkter...',
        }}
      />
    </>
  )
}
