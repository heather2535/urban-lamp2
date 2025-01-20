import { useState, useEffect } from "react"

interface ToastProps {
  title: string
  description?: string
  variant?: "default" | "destructive"
}

interface Toast extends ToastProps {
  id: number // Add `id` property here
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]) // Use `Toast[]` for the state

  const toast = ({ title, description, variant = "default" }: ToastProps) => {
    const id = Date.now()
    setToasts((prevToasts) => [...prevToasts, { id, title, description, variant }]) // Include `id`
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }, 3000)
  }

  return { toast, toasts }
}

export function Toaster() {
  const { toasts } = useToast()

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id} // Use `toast.id` here
          className={`rounded-md p-4 text-white ${toast.variant === "destructive" ? "bg-red-500" : "bg-gray-800"}`}
        >
          <h3 className="font-semibold">{toast.title}</h3>
          {toast.description && <p className="mt-1 text-sm">{toast.description}</p>}
        </div>
      ))}
    </div>
  )
}

export const toast = ({ title, description, variant }: ToastProps) => {
  const event = new CustomEvent("toast", {
    detail: { title, description, variant },
  })
  window.dispatchEvent(event)
}
