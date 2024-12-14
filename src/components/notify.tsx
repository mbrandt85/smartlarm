import { rem, Text } from "@mantine/core"
import { notifications } from "@mantine/notifications"
import { IconCheck, IconExclamationMark, IconX } from "@tabler/icons-react"
import { CSSProperties } from "react"

type NotificationType = "error" | "info" | "success"

const iconStyles: CSSProperties = { width: rem(24), height: rem(24) }

const notificationTypes: Record<
  NotificationType,
  {
    color: string
    icon: React.ReactNode
  }
> = {
  info: {
    color: "blue",
    icon: <IconExclamationMark style={iconStyles} />,
  },

  success: {
    color: "teal",
    icon: <IconCheck style={iconStyles} />,
  },

  error: {
    color: "red",
    icon: <IconX style={iconStyles} />,
  },
}

/**
 * Show notification
 * @param type 'info' | 'success' | 'error'
 * @param message string
 * @param title string
 */
export const notify = (
  type: NotificationType,
  message: string,
  title?: string
) =>
  notifications.show({
    color: notificationTypes[type].color,
    title: title && (
      <Text fw="bold" c={notificationTypes[type].color}>
        {title}
      </Text>
    ),
    message,
    icon: notificationTypes[type].icon,
    autoClose: 5000,
  })
