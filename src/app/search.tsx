import { rem, ActionIcon } from '@mantine/core'
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight'
import {
  IconHome,
  IconDashboard,
  IconFileText,
  IconSearch,
} from '@tabler/icons-react'

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

export default function Search() {
  return (
    <>
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

      <Spotlight
        actions={actions}
        nothingFound='Nothing found...'
        highlightQuery
        searchProps={{
          leftSection: (
            <IconSearch
              style={{ width: rem(20), height: rem(20) }}
              stroke={1.5}
            />
          ),
          placeholder: 'Sök...',
        }}
      />
    </>
  )
}
