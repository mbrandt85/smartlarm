import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import("firebase/app").then(async ({ initializeApp }) => {
  try {
    await Promise.all([
      import("@mantine/core/styles.css"),
      import("@mantine/notifications/styles.css"),
      import("@/index.css"),
    ])

    const root = createRoot(document.getElementById("root")!)

    root.render(
      <StrictMode>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            position: "absolute",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/smartlarm.png" />
          Laddar webshoppen...
        </div>
      </StrictMode>
    )

    const app = initializeApp({
      apiKey: "AIzaSyC_XB4ktcNMCIxOIL-zFvKTGIg5ZTLq7iw",
      authDomain: "smartlarm-d4560.firebaseapp.com",
      databaseURL:
        "https://smartlarm-d4560-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "smartlarm-d4560",
      storageBucket: "smartlarm-d4560.firebasestorage.app",
      messagingSenderId: "123743580652",
      appId: "1:123743580652:web:662e170c07a0d4573490c9",
      measurementId: "G-58493ZZPY4",
    })

    const { initializeAppCheck, ReCaptchaV3Provider } = await import(
      "firebase/app-check"
    )
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(
        "6LfV5pUqAAAAAADB07Eerf3HlZepw_QabplqxIeh"
      ),
      isTokenAutoRefreshEnabled: true,
    })

    const { fetchAndActivate, getRemoteConfig, getValue } = await import(
      "firebase/remote-config"
    )
    const remoteConfig = getRemoteConfig()
    await fetchAndActivate(remoteConfig)
    const theme = JSON.parse(getValue(remoteConfig, "theme").asString())

    const { initializeFirestore, persistentLocalCache } = await import(
      "firebase/firestore"
    )
    initializeFirestore(app, {
      localCache: persistentLocalCache(),
    })

    const { default: App } = await import("@/app")

    root.render(
      <StrictMode>
        <App theme={theme} />
      </StrictMode>
    )
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
  }
})
