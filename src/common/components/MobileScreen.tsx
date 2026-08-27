import type { ReactNode } from 'react'

type MobileScreenProps = {
  children: ReactNode
  label?: string
  labelledBy?: string
}

export function MobileScreen({ children, label, labelledBy }: MobileScreenProps) {
  return (
    <main className="flex min-h-[100svh] items-start justify-center overflow-hidden bg-[#f2f2f3] sm:items-center">
      <section
        className="sago-screen plain-screen shrink-0 text-[#201f21]"
        aria-label={label}
        aria-labelledby={labelledBy}
      >
        {children}
      </section>
    </main>
  )
}

export default MobileScreen