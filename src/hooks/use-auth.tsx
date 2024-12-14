import { notify } from "@/components"
import {
  getAuth,
  signInWithEmailAndPassword,
  type Unsubscribe,
  type User,
} from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { create } from "zustand"

interface Profile {
  firstName: string
  lastName: string
}

type Roles = "super" | "admin"

export type AuthState = Omit<
  AuthStore,
  "loading" | "authState" | "signIn" | "signOut"
>

interface AuthStore {
  isAuth: boolean
  user: User | null
  profile: Profile | null
  role: Roles | null
  loading: boolean
  authState: () => Unsubscribe
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

const initialState = {
  isAuth: false,
  user: null,
  profile: null,
  role: null,
}

export const useAuth = create<AuthStore>((set) => ({
  ...initialState,
  loading: true,

  authState: () => {
    const auth = getAuth()
    const unsubscribe = auth.onAuthStateChanged(
      async (user) => {
        if (user) {
          const token = await user.getIdTokenResult()
          const role = token.claims.role as Roles

          const { getFirestore } = await import("firebase/firestore")
          const firestore = getFirestore()

          const docRef = doc(firestore, "profile", user.uid)
          const docSnap = await getDoc(docRef)

          if (docSnap.exists()) {
            const profile = docSnap.data() as Profile
            set({ isAuth: true, user, profile, role, loading: false })
          }
        } else {
          set({ ...initialState, loading: false })
        }
      },
      (error) => {
        set({ ...initialState, loading: false })
        notify("error", error.message)
      }
    )

    return unsubscribe
  },

  signIn: async (email, password) => {
    const auth = getAuth()

    try {
      set({ loading: true })
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      if (error instanceof Error) {
        notify("error", error.message)
      }
      set({ loading: false })
    }
  },

  signOut: async () => {},
}))
