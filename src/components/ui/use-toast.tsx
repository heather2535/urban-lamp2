import { useState } from "react";

// Export the `ToastProps` interface
export interface ToastProps {
  title: string;
  description?: string;
  variant?: "default" | "destructive";
  action?: ToastActionElement; // Add `action` prop
}

// Export the `ToastActionElement` type
export type ToastActionElement = React.ReactElement<{
  onClick: () => void;
  children: React.ReactNode;
}>;

interface Toast extends ToastProps {
  id: number; // Add `id` property here
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]); // Use `Toast[]` for the state

  const toast = ({
    title,
    description,
    variant = "default",
    action,
  }: ToastProps) => {
    const id = Date.now();
    setToasts((prevToasts) => [
      ...prevToasts,
      { id, title, description, variant, action },
    ]); // Include `id` and `action`
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, 3000);
  };

  return { toast, toasts };
}

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id} // Use `toast.id` here
          className={`rounded-md p-4 text-white ${
            toast.variant === "destructive" ? "bg-red-500" : "bg-gray-800"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{toast.title}</h3>
              {toast.description && (
                <p className="mt-1 text-sm">{toast.description}</p>
              )}
            </div>
            {toast.action && <div className="ml-4">{toast.action}</div>}{" "}
            {/* Render the action */}
          </div>
        </div>
      ))}
    </div>
  );
}

export const toast = ({ title, description, variant }: ToastProps) => {
  const event = new CustomEvent("toast", {
    detail: { title, description, variant },
  });
  window.dispatchEvent(event);
};