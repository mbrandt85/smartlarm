import { MantineProvider, MantineTheme } from "@mantine/core"
import { ModalsProvider } from "@mantine/modals"
import { Notifications } from "@mantine/notifications"
import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router"

import Layout from "./layout"
import NotFound from "./not-found"
import Home from "./home"
import { useAuth } from "@/hooks/use-auth"

interface AppProps {
  theme: MantineTheme
}

export default function App({ theme }: AppProps) {
  const { authState } = useAuth()

  useEffect(() => {
    const unsubscribe = authState()
    console.log("run")
    return () => unsubscribe()
  }, [authState])

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
