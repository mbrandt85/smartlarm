import { MantineProvider, MantineTheme } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { BrowserRouter, Route, Routes } from 'react-router'

import Layout from './layout'
import NotFound from './not-found'
import Home from './home'

interface AppProps {
  theme: MantineTheme
}

export default function App({ theme }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <BrowserRouter>
          <Notifications />
          <Routes>
            <Route element={<Layout />} errorElement={<NotFound />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ModalsProvider>
    </MantineProvider>
  )
}
