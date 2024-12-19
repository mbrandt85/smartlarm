import { Burger, Container, Group, Image, useMantineTheme } from '@mantine/core'
import { useDisclosure, useMediaQuery, useWindowScroll } from '@mantine/hooks'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import styles from './layout.module.css'
import Search from './search'
import User from './user'
import Cart from './cart'
import Nav from './nav'

export default function Layout() {
  const [opened, { toggle, close }] = useDisclosure()
  const [scroll] = useWindowScroll()
  const theme = useMantineTheme()
  const match = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
  const { pathname } = useLocation()

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [opened])

  useEffect(() => {
    window.scrollTo({ top: 0 })
    close()
  }, [pathname])

  useEffect(() => {
    if (!match) {
      close()
    }
  }, [match])

  return (
    <>
      <header
        className={styles.header}
        data-scroll={scroll.y > 0}
        data-open={opened}
        data-mobile={match}
      >
        <Container size='lg' h='100%'>
          <Group
            h='100%'
            justify='space-between'
            className={styles.desktopHeader}
            data-scroll={scroll.y > 0}
          >
            <Group gap='sm'>
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom='sm'
                size='sm'
                lineSize={2.5}
              />

              <Image src='/smartlarm.png' className={styles.logo} />
            </Group>

            <Group gap='xs'>
              <Search mobile={!!match} />
              <User />
              <Cart />
            </Group>
          </Group>
        </Container>
      </header>
      <main className={styles.main}>
        <Container size='lg'>
          <div className={styles.content}>
            <nav
              data-mobile={match}
              data-open={opened}
              data-scroll={scroll.y > 0}
              className={styles.nav}
            >
              <Nav mobile={!!match} />
            </nav>

            <div className={styles.outlet}>
              <Outlet />
            </div>
          </div>
        </Container>
      </main>
      <footer>footer</footer>
    </>
  )
}
