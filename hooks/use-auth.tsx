"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react"

export interface AuthUser {
  id: string
  name: string
  email: string
}

interface AuthContextValue {
  user: AuthUser | null
  setUser: Dispatch<SetStateAction<AuthUser | null>>
  login: (email: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)

  /* ----------  Persistencia en localStorage ---------- */
  useEffect(() => {
    const stored = localStorage.getItem("lego-user")
    if (stored) setUser(JSON.parse(stored))
  }, [])

  useEffect(() => {
    if (user) localStorage.setItem("lego-user", JSON.stringify(user))
    else localStorage.removeItem("lego-user")
  }, [user])

  /* ----------  Acciones  ---------- */
  const login = (email: string) => {
    // Simulamos nombre a partir del email
    const name = email.split("@")[0]
    setUser({
      id: crypto.randomUUID(),
      name,
      email,
    })
  }

  const logout = () => setUser(null)

  return <AuthContext.Provider value={{ user, setUser, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth debe usarse dentro de <AuthProvider>")
  return ctx
}
