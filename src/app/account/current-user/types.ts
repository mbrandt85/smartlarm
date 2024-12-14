export interface Profile {
  firstName: string
  lastName: string
  photoUrl?: string
}

export type Role = "admin" | "super" | undefined
