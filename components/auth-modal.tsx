"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"

interface AuthModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AuthModal({ open, onOpenChange }: AuthModalProps) {
  const [email, setEmail] = useState("")
  const { login } = useAuth()

  const handleSubmit = () => {
    if (!email) return
    login(email)
    setEmail("")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Iniciar Sesión</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input type="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <DialogFooter className="mt-6">
          <Button onClick={handleSubmit} className="w-full">
            Entrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
