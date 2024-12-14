import { AppShell, Burger, Group, Image, Skeleton } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { Outlet } from "react-router"
import CurrentUser from "./account/current-user"

export default function Layout() {
  const [opened, { toggle }] = useDisclosure()

  return (
    <AppShell
      header={{ height: 80 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      aside={{
        width: 300,
        breakpoint: "md",
        collapsed: { desktop: false, mobile: true },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              lineSize={3}
            />

            <Image src="/smartlarm.png" height={48} />
          </Group>

          <Group>icons</Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>

      <AppShell.Aside p="md">
        <CurrentUser />
      </AppShell.Aside>
    </AppShell>
  )
}
