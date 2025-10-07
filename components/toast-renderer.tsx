"use client"

import { useToast } from "@/hooks/use-toast"

export function ToastRenderer() {
  const { toasts, dismiss } = useToast()

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="bg-green-500 text-white p-4 rounded shadow-lg"
          onClick={() => dismiss(t.id)}
        >
          <div>{t.title}</div>
          {t.description && <div>{t.description}</div>}
        </div>
      ))}
    </div>
  )
}
