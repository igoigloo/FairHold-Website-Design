"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type ViewType = "client" | "vendor"

interface ViewContextType {
  currentView: ViewType
  setCurrentView: (view: ViewType) => void
  isClient: boolean
  isVendor: boolean
}

const ViewContext = createContext<ViewContextType | undefined>(undefined)

export function ViewProvider({ children }: { children: ReactNode }) {
  const [currentView, setCurrentView] = useState<ViewType>("client")

  return (
    <ViewContext.Provider
      value={{
        currentView,
        setCurrentView,
        isClient: currentView === "client",
        isVendor: currentView === "vendor",
      }}
    >
      {children}
    </ViewContext.Provider>
  )
}

export function useView() {
  const context = useContext(ViewContext)
  if (context === undefined) {
    throw new Error("useView must be used within a ViewProvider")
  }
  return context
}
