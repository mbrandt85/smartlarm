import { Avatar, Badge, Group, Stack, Text } from "@mantine/core"
import { getAuth, type User } from "firebase/auth"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"

import type { Profile, Role } from "./types"

export default function CurrentUser() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User>()
  const [profile, setProfile] = useState<Profile>()
  const [role, setRole] = useState<Role>()

  useEffect(() => {
    const auth = getAuth()
    const firestore = getFirestore()

    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          setUser(user)

          const token = await user.getIdTokenResult()
          const role = token.claims.role

          if (role === "admin" || role === "super") {
            setRole(role)
          }

          const docRef = doc(firestore, "users", user.uid)
          const docSnap = await getDoc(docRef)

          if (docSnap.exists()) {
            setProfile(docSnap.data() as Profile)
          }

          setLoading(false)
        } catch (error) {
          console.log(error)
          setLoading(false)
        }
      } else {
        setProfile(undefined)
        setLoading(false)
      }
    })
  }, [])

  if (loading) return <div>loading</div>

  return (
    <Stack align="center" py="xs" px="sm" gap="xs">
      <Avatar
        variant="default"
        size="xl"
        src={profile?.photoUrl}
        name={`${profile?.firstName} ${profile?.lastName}`}
      />

      <Stack align="center" gap={0}>
        <Group gap="xs">
          <Text size="sm">
            {profile?.firstName} {profile?.lastName}
          </Text>

          {role && <Badge size="xs">{role}</Badge>}
        </Group>

        <Text size="xs" c="dimmed">
          {user?.email}
        </Text>
      </Stack>
    </Stack>
  )
}
