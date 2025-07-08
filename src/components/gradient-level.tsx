export function GradientText({ children }: { children: React.ReactNode }) {
    return (
      <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
        {children}
      </span>
    )
  }
  
  