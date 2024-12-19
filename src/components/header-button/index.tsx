import { UnstyledButton, Group, Text } from '@mantine/core'
import styles from './header-button.module.css'

export default function HeaderButton({
  icon,
  text,
  onClick,
  rightSection,
  width = 'auto',
}: {
  icon: React.ReactNode
  text: string
  onClick?: () => void
  rightSection?: React.ReactNode
  width?: string | number
}) {
  return (
    <UnstyledButton
      className={styles.button}
      style={{ width }}
      onClick={onClick && onClick}
    >
      <Group justify='space-between'>
        <Group gap='xs'>
          {icon}
          <Text>{text}</Text>
        </Group>

        {rightSection && rightSection}
      </Group>
    </UnstyledButton>
  )
}
